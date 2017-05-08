/**
 * Created by Daan on 4-5-2017.
 */
var express = require('express');
var app = express();


var config = require('./config.json');
app.set('PORT, config.webPort');
console.log(config.webPort)
var port = process.env.PORT || config.webPort;


app.get('/', function(request, response) {
    response.send('Hello Avans!');
})

app.get('/about', function(request, response) {
    response.send('Written by <jouw naam hier invullen>');
})

app.post('/', function(request, response) {
    response.send('Hello Avans, POST request received!');
})

app.put('/', function(request, response) {
    response.send('Hello Avans, PUT request received!');
})

app.all('*', function(request, response) {
    response.status(404);
    response.send('404 - Not found');
})

app.listen(port, function() {
    console.log('Server app is listening on port ' + port);
})


