{/*  the var Nav = require('Nav') although expected to be included
in this app.jsx is not required here because the Nav is included in the static main.jsx
and it will include children such as Weather, About and Examples.
*/}

var React = require('react'); {/*This is the react.js library */}
var ReactDOM = require('react-dom'); {/*This is the ReactDOM library */}
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');
{/* We always load the react library first and the react-dom library inside the app.jsx.
  Inside the app.jsx we'll load the Route, Router, IndexRoute, hashHistory because
  react-router plugin needs them for good user experience. require Main, Weather,
  About and Examples because the app.jsx needs them to do some JavaScript magic :).
  As usual Anything not a used is not 'required'.
*/}


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="examples" component={Examples}/>
      <Route path="about" component={About}/>
      <IndexRoute component={Weather}/>{/*When you use the IndexRoute its important to use the IndexLink, to match it on Nav */}
    </Route>
  </Router>,
  document.getElementById('app')
);
