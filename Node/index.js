var express = require('express');

// Constants
var PORT = 8080;

// App
var app = express();
app.get('/', function (req, res) {
  console.log('We are going to respond');
  res.send('<h1>Hello world</h1>\n');
  console.log('We have said hello :)');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
