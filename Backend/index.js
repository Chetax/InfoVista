// index.js - Main file

const express = require('express');
const cors = require('cors'); // Import cors middleware
const mongoose = require('mongoose');
const path = require('path'); // Import path module
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
mongoose.connect(mongostring, { useNewUrlParser: true, useUnifiedTopology: true }); // Add options for MongoDB connection
const database = mongoose.connection;

database.on('error', (error) => {
    console.error(error);
});

database.once('open', () => { // Change 'connected' event to 'open'
    console.log('Database Connected');
});

app.get('/api/getname', (req, res) => {
    res.send("Hello");
});

// Integration of newsRoutes module
const newsRoutes = require('./Routes/news'); // Assuming you have a 'news.js' file in a 'Routes' directory
app.use('/api/news', newsRoutes); // Use the news routes under /api prefix

// Serve the index.html file for any other requests
app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(process.env.PORT || 4000, () => {
    console.log(`Server Started At Port ${process.env.PORT || 4000}`);
});
