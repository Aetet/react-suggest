/**
* @jsx React.DOM
*/
var React = require('react');
var SuggestTextField = React.createClass({
  handleChange: function (e) {
    var target = e.target;
    var value = target.value;
    this.props.onChange('keyword', value);
  },

  handleFocusOut: function (e) {
    this.props.onChange('isShow', false);
  },

  handleKeydown: function (e) {
    var keys = {
      down: 40,
      up: 38,
      enter: 13
    };

    if (e.keyCode === keys.down) {
      this.props.onChange('key', 'down');
      e.preventDefault();
      e.stopPropagation();
    } else if (e.keyCode === keys.up) {
      this.props.onChange('key', 'up');
      e.preventDefault();
      e.stopPropagation();
    } else if (e.keyCode === keys.enter) {
      this.props.onChange('key', 'enter');
      e.preventDefault();
      e.stopPropagation();
    }


  },

  render: function () {
    return (
      <input onBlur={this.handleFocusOut}
             onKeyDown={this.handleKeydown}
             type="text"
             onChange={this.handleChange}
             name="suggest"
             value={this.props.keyword} />
    );
  }
});
module.exports = SuggestTextField;