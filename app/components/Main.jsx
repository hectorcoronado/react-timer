var React = require('react');

var Main = (props) => {
  return (
  <div>
    <div>
      <p>Main.jsx Rendered</p>
      {props.children}
    </div>
  </div>

  );
}

module.exports = Main;
