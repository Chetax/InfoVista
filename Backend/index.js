// index.js - Main file

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();

const app = express();

// Enable CORS for all routes
app.use(cors());

// Serve static files from the 'client/build' directory
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Middleware to set Content-Type header for JSON responses
app.use((req, res, next) => {
    if (req.path.startsWith('/api')) {
        res.setHeader('Content-Type', 'application/json; charset=utf-8');
    }
    next();
});

app.use(express.json());

const mongostring = process.env.DATABASE_URL;
mongoose.connect(mongostring, { useNewUrlParser: true, useUnifiedTopology: true });
const database = mongoose.connection;

database.on('error', (error) => {
    console.error(error);
});

database.once('open', () => {
    console.log('Database Connected');
});

app.get('/api/getname', (req, res) => {
    res.send("Hello");
});

// Integration of newsRoutes module
const newsRoutes = require('./Routes/news');
app.use('/api/news', newsRoutes);

// Serve the index.html file for any other requests
app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server Started At Port ${port}`);
});
