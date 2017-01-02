var React = require('react');
var Nav = require('Nav');
var Weather = require('Weather');
{/* We always load the react library first. Inside the Main component we'll
  load the Nav component and the Weather component because they are children. Anything not a child is not 'required'
*/}



{/*
JavaScript ES5 code below
var Main = React.createClass({
  render: function () {
    return(
      <div>
        <Nav/>
        <h2>Main component</h2>
          {this.props.children}
      </div>
    );
  }

});
*/}
//JavaScript ES6 code below

{/* (step 9 behind the scenes) Main component being a parent Weather component receives API data from Weather.jsx and then directs it to the respective child, in this case WeatherMessage.jsx  */}
var Main = (props) => {

    return(
      <div>
        <Nav/> {/*  <Nav/> this tag is included here because it's a static page that will appear across the navigation menu. all tags included like this appears across the webpage regardless of the active link */}
        <h2>Main component</h2>
        {props.children} {/* Because we're in the Main page that will host all the components of a webpage props.children represents all those components, as children  */}
      </div>
    );
}
module.exports = Main;
