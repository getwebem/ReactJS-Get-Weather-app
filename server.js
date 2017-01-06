var express = require('express');//we're using the express server thats why its being loaded first.


var app = express();

const PORT = process.env.PORT || 3000; //heroku will give us the port to use through the process.env.PORT or else using the default PORT 3000

app.use(function(req, res, next) {
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
//the above code forwards all https addresses to http
  } else {
    next(); //if the address is already http then the address just goes through
  }
});


app.use(express.static('public'));

app.listen(PORT, function () {
  console.log('Express server is up on port ' + PORT);//heroku will tell us which localhost server to use, then we visit localhost:PORT
});
