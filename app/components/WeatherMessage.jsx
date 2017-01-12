var React = require('react');
{/* We always load the react library first. Anything not a child is not 'required'*/}

{/* (step 10 behind the scenes) react receives data from Main.jsx and splits it
  to be shown through {temp} and {location} below. */}
var WeatherMessage = ({temp, location}) => {

  return(
    <div>
    <h3 className='text-center'>It&#39;s {temp}	&ordm;C in {location}.</h3>
    </div>
  );

}

module.exports = WeatherMessage;
