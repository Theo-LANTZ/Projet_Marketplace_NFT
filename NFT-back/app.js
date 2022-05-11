var express= require('express');
var app = express();
var cors = require('cors');

app.use(cors());

var OeuvreController = require('./oeuvres/OeuvreController');
app.use('/oeuvres', OeuvreController);

var ActionController = require('./actions/ActionController');
app.use('/actions', ActionController);

module.exports = app;