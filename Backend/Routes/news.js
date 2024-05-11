// news.js - Route

const express = require('express');
const router = express.Router();
const fetchNews = require('../Controller/FetchNews');

router.get('/geteverything', fetchNews);

module.exports = router;
