const cors = require('cors');
const express = require('express');

const api = require('./routes/api');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/', api);

module.exports = app;