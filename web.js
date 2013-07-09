var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
// syncronically read index file to cache when creating server
// no need to use buffer as the content can be cached in this case
var cachedIndex = fs.readFileSync('index.html', {"encoding": "utf8"});

app.get('/', function(request, response) {
  response.send(cachedIndex);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
