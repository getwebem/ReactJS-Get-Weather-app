var React = require('react');
{/* We always load the react library first. Anything not a child is not 'required'*/}


{/*
  var WeatherMessage = React.createClass({
    render: function () {
      var {temp, location} = this.props;
      return(
        <div>
        <h3>it's {temp} in {location}.</h3>
        </div>
      );
    }

  });
*/}

{/* (step 10 behind the scenes) react receives data from Main.jsx and splits it
  to be shown through {temp} and {location} below. */}
var WeatherMessage = ({temp, location}) => {

  return(
    <div>
    <h3>It&#39;s {temp}	&ordm;C in {location}.</h3>
    </div>
  );

}

module.exports = WeatherMessage;
