// index.js - Main file

const express = require('express');
const cors = require('cors'); // Import cors middleware
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// Enable CORS for all routes with specific origin and methods
app.use(cors());
// app.use(cors({
//   origin: ' http://localhost:3000',
//   methods: ['POST', 'GET'],
//   credentials: true,
// }));
app.use(express.static(__dirname)); //here is important thing - no static directory, because all static :)



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

app.get('/getname', (req, res) => {
    res.send("Hello");
});

// Integration of newsRoutes module
const newsRoutes = require('./Routes/news'); // Assuming you have a 'news.js' file in a 'Routes' directory
app.use('/news', newsRoutes); // Use the news routes

app.get("/*", function (req, res) {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
 })
 
app.listen(process.env.PORT || 4000, () => {
    console.log(`Server Started At Port ${process.env.PORT}`);
});
