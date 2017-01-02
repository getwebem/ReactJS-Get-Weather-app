var React = require('react');
{/* We always load the react library first. Anything not a child is not 'required'*/}

var WeatherForm = React.createClass({
    onFormSubmit: function(e) {
      e.preventDefault();                 {/* (step 4 behind the scenes) the WeatherForm component receives the click and prevents the page default behavior using e.preventDefault() */}

var location = this.refs.location.value;  {/* (step 4.1 behind the scenes) at the same time react takes the input location name using this.refs.location.value */}

    if (location.length > 0) {            {/* (step 5 behind the scenes) react checks the input value if its empty and if its not react sends the value name to the openWeatherMap API through this.props.onSearch(location) */}
      this.refs.location.value = '';
      this.props.onSearch(location);
    }

},

  render: function () {
    return(
      <div>
        <form onSubmit={this.onFormSubmit}> {/* (step 3 behind the scenes) the form takes the click event using the ref="location" to the WeatherForm component */}
          <input type="text" ref="location"/> {/* (step 1) the user types in the name of the city to get the weather e.g London */}
          <button>Get Weather</button> {/* (step 2) the user clicks/taps the Get Weather button */}
        </form>
      </div>
    );
  }

});

module.exports = WeatherForm;
