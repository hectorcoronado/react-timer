var React = require('react'),
    {Link, IndexLink} = require('react-router');

var Navigation = React.createClass({
  render: function () {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">
              React Timer
            </li>
            <li>
              <IndexLink to='/' activeClassName="active-link">
                Timer
              </IndexLink>
            </li>
            <li>
              <Link to='/countdown' activeClassName="active-link">
                Countdown
              </Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">
              Created by <a href="http://www.hectorcoronado.codes" target="_blank">Hector Coronado</a>
            </li>
          </ul>
        </div>
      </div>
    )
  }

});

module.exports = Navigation;
