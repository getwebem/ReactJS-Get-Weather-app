var React = require('react'); {/* We always load the react library. Anything not a child is not 'required'*/}
var {Link} = require('react-router');

var Examples = (props) => {
  return(
    <div>
      <h1 className='text-center'>Examples</h1>
      <p>Here are a few example locations to try out:</p>
      <ol>
        <li>
          <Link to='/?location=Stockholm'>Stockholm, Sweden</Link>
        </li>
        <li>
          <Link to='/?location=London'>London, U.K</Link>
        </li>
      </ol>
    </div>
  );

}

module.exports = Examples;
