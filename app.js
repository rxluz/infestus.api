// Reuire diet
var server = require('diet');

// Main domain
var app = server()
app.listen('https://api.infestus.cc/')
app.get('/', function($){
    $.end('hello world api.infestus.cc ')
})

// Sub domain
var sub = server()
sub.listen('https://apinew.infestus.cc/')
sub.get('/', function($){
    $.end('hello world at apinew!')
})

// Other domain
var other = server()
other.listen('http://other.com/')
other.get('/', function($){
    $.end('hello world at other domain')
})
