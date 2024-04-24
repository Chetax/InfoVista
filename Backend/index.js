const express = require('express');
const cors = require('cors');
const routes = require('./Routes/news');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

  app.use(cors(
    {
      origin:[""],
      method:['POST','GET'],
      credentials:true,
    }
  ))
app.use(express.json());

const mongostring = process.env.DATABASE_URL;
mongoose.connect(mongostring);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error);
});

database.once('connected', () => {
    console.log('Database Connected');
});

app.use('/news', routes);

app.listen(process.env.PORT || 4000, () => {
    console.log(`Server Started At Port ${process.env.PORT}`);
});
