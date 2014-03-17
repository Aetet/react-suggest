/**
* @jsx React.DOM
*/
var React = require('react'),
    SuggestTextField = require('root/suggest/views/SuggestTextField'),
    SuggestSelect = require('root/suggest/views/SuggestSelect');
var Suggest = React.createClass({
  getInitialState: function () {
    return {
      showSelect: false,
      keyword: ''
    };
  },
  handleSuggest: function (value) {
    var showSelect = (value.length >= 3) ? true : false;
    this.setState({keyword: value, showSelect: showSelect});
  },
  render: function () {
    var suggestSelect = (this.state.showSelect) ? 
        <SuggestSelect keyword={this.state.keyword} /> : '';
    return (
      <div>
        <SuggestTextField onChange={this.handleSuggest} keyword={this.state.keyword} />
        {suggestSelect}
      </div>
    );
  }
});
module.exports = Suggest;