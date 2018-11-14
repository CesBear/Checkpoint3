const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

require('./server/models/Providers');
mongoose.connect('mongodb://user:usercheckpoint3@ds157853.mlab.com:57853/checkpoint3');

app.use(bodyParser.json());

const providersRoutes = require('./server/routes/providersRoutes');
providersRoutes(app);

app.listen(5000);