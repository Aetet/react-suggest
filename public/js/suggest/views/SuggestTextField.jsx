/**
* @jsx React.DOM
*/
var React = require('react');
var SuggestTextField = React.createClass({
  handleChange: function (e) {
    var target = e.target;    
    var value = target.value;
    this.props.onChange(value);
  },

  render: function () {
    return (
      <input type="text" onChange={this.handleChange} name="suggest" value={this.props.keyword} />
    );
  }
});
module.exports = SuggestTextField;