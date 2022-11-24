const express = require('express');
const db = require('./config/connection');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);


// Use this to log mongo queries being executed!
mongoose.set('debug', true);

app.use(require('./routes'));

app.listen(PORT, () => console.log(`Social Network API server running on:${PORT}`));