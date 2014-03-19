/**
* @jsx React.DOM
*/
var React = require('react'),
    SuggestTextField = require('root/suggest/views/SuggestTextField'),
    Suggestions = require('root/suggest/views/Suggestions');
var Suggest = React.createClass({
  getInitialState: function () {
    return {
      showSelect: false,
      keyword: '',
      suggestions: [
        {
          airportCode: 'LED',
          country: 'Россия',
          airport: 'Пулково',
          isActive: false
        }, {
          airportCode: 'MOV',
          country: 'Россия',
          airport: 'Шереметьево',
          isActive: false
        }
      ]
    };
  },

  handleSuggest: function (name, value) {
    switch(name) {
      case 'key':
        this.handleKeySuggest(value);
        break;
      case 'keyword':
        this.handleKeyword(value);
        break;
      case 'isShow':
        this.handleShow();
    }
  },

  handleShow: function () {
    this.setState({showSelect: false});
  },

  handleKeyword: function (value) {
    var showSelect = (value.length >= 3) ? true : false;
    this.setState({keyword: value, showSelect: showSelect});
  },
  handleSuggestionChange: function (index, key, value) {
    var state = this.state;
    var suggestions = state.suggestions;
    suggestions[index][key] = value;
    this.setState({suggestions: suggestions});
  },

  handleKeySuggest: function (value) {
    var suggestions = this.state.suggestions;
    var len = suggestions.length;
    suggestions.map(function (suggestion, index) {
      if (suggestion.isActive) {
        activeIndex = index;
      }
    });
    switch(value) {
      case 'up':
        if (typeof activeIndex === 'undefined') {
          suggestions[len - 1].isActive = true;
        } else if (activeIndex === 0) {
          suggestions[activeIndex].isActive = false;
          suggestions[len - 1].isActive = true;
        } else {
          suggestions[activeIndex].isActive = false;
          suggestions[activeIndex - 1].isActive = true;
        }
        break;
      case 'down':
        if (typeof activeIndex === 'undefined') {
          suggestions[0].isActive = true;
        } else if (activeIndex >= (len - 1)) {
          suggestions[activeIndex].isActive = false;
          suggestions[0].isActive = true;
        } else {
          suggestions[activeIndex].isActive = false;
          suggestions[activeIndex + 1].isActive = true;
        }
        break;
      case 'enter':
        break;
    }
    this.setState({suggestions: suggestions});
  },

  render: function () {
    var suggestSelect = (this.state.showSelect) ?
        (<Suggestions suggestions={this.state.suggestions}
                      keyword={this.state.keyword}
                      onChange={this.handleSuggestionChange}/>) : '';
    return (
      <div>
        <SuggestTextField onChange={this.handleSuggest} keyword={this.state.keyword} />
        {suggestSelect}
      </div>
    );
  }
});
module.exports = Suggest;