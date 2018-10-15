// Required files
require('./config/config');

const express = require('express');
var {authenticate} = require('./middleware/authenticate');
const _ = require('lodash');
const bodyParser = require('body-parser');
const path = require('path');
const hbs = require('hbs');
const routes = require('./routes/routes');

// Set up the port and start the web server
const port = process.env.PORT || 3000;
var app = express();

app.set('view engine', 'hbs');
hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

// Set up routes
app.use(routes);

// Start listening on the proper ports
app.listen(port, () => {
    console.log(`Started on port ${port}`);  
});
  
module.exports = {app};
