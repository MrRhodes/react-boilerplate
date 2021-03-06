var express = require('express');
var babelify = require('express-babelify-middleware');
var app = express();

var opts = {
  cache: false, // rebuild with each request
}

app.use('/app.js', babelify(__dirname + "/jsx/app.jsx", opts))
app.use(express.static('public'));

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Server listening at http://%s:%s', host, port);
});

