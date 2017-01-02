var React = require('react');
{/* We always load the react library. Anything not a child is not 'required'*/}


{/*
  JavaScript ES5 code below
  var About = React.createClass({
    render: function () {
      return(
        <div>
          <h3>About component</h3>
        </div>
      );
    }

  });

  JavaScript ES6 code below
*/}

var About = (props) => {
  return(
    <div>
      <h3>About component!</h3>
    </div>
  );

}
module.exports = About;
