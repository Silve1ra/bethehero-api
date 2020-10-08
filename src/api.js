const express = require('express');
const routes = require('./routes');

const cors = require('cors');
const serverless = require('serverless-http');

const app = express();
app.use(cors()); 

app.use('/.netlify/functions/api', routes);

module.exports.handler = serverless(app);