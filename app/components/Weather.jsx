var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

{/* We always load the react library first. Inside the Weather component we'll
  load the WeatherForm, WeatherMessage and openWeatherMap because they are
  children of the Weather component. Anything not a child is not 'required'
*/}



{/* (step 8 behind the scenes) Weather component being a parent receives API
  data from openWeatherMap.jsx, looks at the data and sends it to its parent Main.jsx
  to look at the data again before sending it to WeatherMessage.jsx to
  be shown to the user */}

var Weather = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false
    }
  },

handleSearch: function(location) {
  var that = this;

  this.setState({isLoading: true});

  openWeatherMap.getTemp(location).then(function(temp) {
    that.setState({
      location: location,
      temp: temp,
      isLoading: false
    });

}, function (errorMessage) {
    that.setState({isLoading: false});
    alert(errorMessage);
});
  },
  render: function () {
    var {isLoading, temp, location} = this.state;
    function renderMessage() {
      if (isLoading) {
        return <h3>Fetching weather...</h3>;

    } else if (temp && location) {
      return <WeatherMessage temp={temp} location={location}/>;
      }
    }

    {/* (step 8.2 behind the scenes) the handleSearch: function above takes the data through the
      openWeatherMap.getTemp(location) and then makes some specifications that we only want to use
      the location and the temperature (temp) from this data but in the mean while, while getting this data
      react should show <h3>Fetching weather...</h3> on the screen. If the error ever occurs the user showed
      receive this error through the function (errorMessage)  */}
    return(
      <div>
        <h3>Weather component</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        {/* (step 8.1 behind the scenes) when data is received
        from openWeatherMap.jsx the first thing react does process it through the onSearch={this.handleSearch}
        and have the handleSearch: function above takes care of the rest. */}

        {renderMessage()}
      </div>
    );
  }

});

module.exports = Weather;
