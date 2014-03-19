/**
* @jsx React.DOM
*/
var React = require('react');
var Suggestion = React.createClass({
  handleEnter: function (e) {
 //   this.refs.suggestion.getDOMNode().className = 'ui-menu-item jsSuggestItem bSuggestion_mActive';
    var index = this.refs.suggestion.getDOMNode().dataset.index;
    this.props.onChange(index, 'isActive', true);
  },

  handleLeave: function (e) {
//    this.refs.suggestion.getDOMNode().className = 'ui-menu-item jsSuggestItem';
    var index = this.refs.suggestion.getDOMNode().dataset.index;
    this.props.onChange(index, 'isActive', false);
  },

  render: function () {
    var regClassName = 'ui-menu-item jsSuggestItem ';
    var className = (this.props.isActive) ? regClassName + 'bSuggestion_mActive' : regClassName;
    console.log('className', className);
    return (
      <li data-index={this.props.index} ref='suggestion' onMouseEnter={this.handleEnter}
          onMouseLeave={this.handleLeave}
          className={className}
          data-code="" data-name="" data-label="" data-shadow="" data-type="" role="menuitem">
        <a className="">
          <span className="nobr">
            <span>{this.props.airport}</span>
            <em>{this.props.country}</em>
            <i>{this.props.airportCode}</i>
          </span>
        </a>
      </li>
    );
  }
});
module.exports = Suggestion;