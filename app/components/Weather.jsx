var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var ErrorModal = require('ErrorModal');
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

  this.setState({
    isLoading: true,
    errorMessage: undefined,
    location: undefined,
    temp: undefined
  });

  openWeatherMap.getTemp(location).then(function(objData) {
    that.setState({
      location: objData.location,
      temp: objData.temp,
      isLoading: false
    });

}, function (e) {
    that.setState({
      isLoading: false,
      errorMessage: e.message
    });
});
  },
  componentDidMount: function () {
    var location = this.props.location.query.location;
    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },
  componentWillReceiveProps: function (newProps) {
    var location = newProps.location.query.location;
    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },

  render: function () {
    var {isLoading, temp, location, errorMessage} = this.state;
    function renderMessage() {
      if (isLoading) {
        return <h3 className='text-center'>Fetching weather...</h3>;

    } else if (temp && location) {
      return <WeatherMessage temp={temp} location={location}/>;
      }
    }

    function renderError() {
      if (typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage}/>
        );
      }
    }


    {/* (step 8.2 behind the scenes) the handleSearch: function above takes the data through the
      openWeatherMap.getTemp(location) and then makes some specifications that we only want to use
      the location and the temperature (temp) from this data but in the mean while, while getting this data
      react should show <h3>Fetching weather...</h3> on the screen. If the error ever occurs the user showed
      receive this error through the function (errorMessage)  */}
    return(
      <div>
        <h1 className='text-center page-title'>Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {/* (step 8.1 behind the scenes) when data is received
        from openWeatherMap.jsx the first thing react does process it through the onSearch={this.handleSearch}
        and have the handleSearch: function above takes care of the rest. */}

        {renderMessage()}
        {renderError()}
      </div>
    );
  }

});

module.exports = Weather;
