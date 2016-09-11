var React = require('react');

var Navigation = require('Navigation');

var Main = (props) => {
  return (
  <div>
    <Navigation/>
    <div>
      <p>Main.jsx Rendered</p>
      {props.children}
    </div>
  </div>

  );
}

module.exports = Main;
