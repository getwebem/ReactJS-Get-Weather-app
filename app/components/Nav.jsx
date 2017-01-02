var React = require('react');
var {Link, IndexLink} = require('react-router');
{/* We always load the react library first. Inside the Nav component we'll
  load the Link and IndexLink because react-router plugin needs them for good user experience. Anything not a child is not 'required'
*/}


{/*
  JavaScript ES5 code below
  var Nav = React.createClass({
    render: function () {
      return(
        <div>
          <h2>Nav component</h2>
          <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
          <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
          <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
        </div>
      );
    }

  });
*/}

{/*
  JavaScript ES6 code below
  the Nav component will represent the menu bar which will host the Get Weather, About and Examples links
  */}


var Nav = (props) => {
  return(
    <div>
      <h2>Nav component</h2>
      <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink> {/* the IndexLink will represent homepage link such as Get Weather.*/}
      <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link> {/*  the Link to about is just another link inside the Nav bar menu */}
      <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link> {/* the Link to Examples is just another link inside the Nav bar menu */}
    </div>
  );
}

module.exports = Nav;
