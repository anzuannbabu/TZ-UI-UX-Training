var express = require('express');
var app = express();
// This responds with "Hello World" on the homepage
app.get('/', function (req, res) {
   res.send('Hello GET');
})
// This responds a POST request for the homepage
app.post('/', function (req, res) {
   res.send('Hello POST');
})
// This responds a DELETE request for the /del_user page.
app.delete('/del_user', function (req, res) {
   res.send('Hello DELETE');
})
// This responds a GET request for the /list_user page.
app.get('/list_user', function (req, res) {
   res.send('<ul><li>one</li><li>two</li></ul>');
})
// This responds a GET request for abcd, abxcd, ab123cd, and so on
app.get('/ab*cd', function(req, res) {   
   res.send('Page Pattern Match');
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})