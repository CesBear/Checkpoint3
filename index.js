const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

require('./server/models/Artists');
mongoose.connect('mongodb://cesar:cesar123@ds157923.mlab.com:57923/checkpoint3');



app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});
app.use(bodyParser.json());

const artistsRoutes = require('./server/routes/artistsRoute');
artistsRoutes(app);

app.listen(5000);