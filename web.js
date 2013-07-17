var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  // read file every time to avoid restarting node
  var htmlfile = fs.readFileSync('index.html').toString();
  response.send(htmlfile);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
