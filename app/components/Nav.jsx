var React = require('react');
var {Link, IndexLink} = require('react-router');
{/* We always load the react library first. Inside the Nav component we'll
  load the Link and IndexLink because react-router plugin needs them for good user experience. Anything not a child is not 'required'
*/}


{/*
  JavaScript ES6 code below
  the Nav component will represent the menu bar which will host the Get Weather, About and Examples links
  */}

var Nav = React.createClass({
onSearch: function (e) {
  e.preventDefault();
var location = this.refs.search.value;
var encodedLocation = encodeURIComponent(location);

if (location.length > 0) {
  this.refs.search.value = '';
  window.location.hash = '#/?location=' + encodedLocation;
}
},

  render: function () {
    return (
    <div className='top-bar'>
      <div className='top-bar-left'>
        <ul className='menu'>
          <li className='menu-text'>Weather app</li>
          <li>
            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink> {/* the IndexLink will represent homepage link such as Get Weather.*/}
          </li>
          <li>
            <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link> {/*  the Link to about is just another link inside the Nav bar menu */}
          </li>
          <li>
            <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link> {/* the Link to Examples is just another link inside the Nav bar menu */}
          </li>
        </ul>

      </div>
      <div className='top-bar-right'>
        <form onSubmit={this.onSearch}>
          <ul className='menu'>
            <li>
              <input type='search' placeholder='Search weather by city' ref='search'/>
            </li>
            <li>
              <input type='submit' className='button' value='Get Weather'/>
            </li>
          </ul>
        </form>

      </div>
    </div>
  );
  }
});


module.exports = Nav;
