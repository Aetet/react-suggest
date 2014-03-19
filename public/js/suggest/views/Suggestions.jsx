/**
* @jsx React.DOM
*/
var React = require('react'),
    Suggestion = require('root/suggest/views/Suggestion');
var SuggestSelect = React.createClass({
  handleChange: function (index, key, value) {
    this.props.onChange(index, key, value);
  },
  render: function () {
    var self = this;
    var isOneActive = false;
    var suggestions = this.props.suggestions.map(function (suggestion, index) {
      var isActive = suggestion.isActive;
      if (isActive) {
        if (isOneActive) {
          isActive = false;
        } else {
          isOneActive = true;
          isActive = true;
        }
      } else {
        isActive = false;
      }
      return (
        <Suggestion airportCode={suggestion.airportCode}
                    key={'suggestion' + index}
                    index={index}
                    isActive={isActive}
                    country={suggestion.country}
                    airport={suggestion.airport}
                    onChange={self.handleChange} />
      );
    });
    return (
      <ul className="dropdown">
        {suggestions}
      </ul>
    );
  }
});
module.exports = SuggestSelect;