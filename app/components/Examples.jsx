var React = require('react'); {/* We always load the react library. Anything not a child is not 'required'*/}

{/*
JavaScript ES5 code below
var Examples = React.createClass({
  render: function () {
    return(
      <div>
        <h3>Examples component</h3>
      </div>
    );
  }

});

JavaScript ES6 code below
*/}

var Examples = (props) => {
  return(
    <div>
      <h3>Examples component</h3>
    </div>
  );

}

module.exports = Examples;
