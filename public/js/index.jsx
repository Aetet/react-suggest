/** @jsx React.DOM */

var React = require('react'),
    Suggest = require('root/suggest/views/Suggest');
var Index = React.createClass({
  render: function () {
    return (
      <div>
        <Suggest />
      </div>);
  }
});
React.renderComponent(
    <Index /> , document.querySelector('.app'));