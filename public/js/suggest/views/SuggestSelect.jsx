/**
* @jsx React.DOM
*/
var React = require('react');
var SuggestSelect = React.createClass({
  render: function () {
    return (
      <ul className="dropdown">
          <li className="ui-menu-item jsSuggestItem" data-code="" data-name="" data-label="" data-shadow="" data-type="" role="menuitem">
            <a className="">
              <span className="nobr">
                <span>
                  Moscow
                </span>
                <em>
                  , Moscow
                </em>
                <i>
                  "LED"
                </i>
              </span>
            </a>
          </li>
      </ul>
    );
  }
});
module.exports = SuggestSelect;