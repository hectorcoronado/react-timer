var React = require('react'),
    ReactDOM = require('react-dom'),
    {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Main = require('Main');

// Load Foundation
require('style!css!foundation-sites/dist/foundation.min.css')
// Initialize Foundation
$(document).foundation();

// App.css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      
    </Route>
  </Router>,
  document.getElementById('app')
);
