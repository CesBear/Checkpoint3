const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

require('./server/models/Providers');
mongoose.connect('mongodb://user:usercheckpoint3@ds157853.mlab.com:57853/checkpoint3');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});

app.use(bodyParser.json());

const providersRoutes = require('./server/routes/providersRoutes');
providersRoutes(app);

app.listen(5000);