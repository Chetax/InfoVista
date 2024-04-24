const axios = require('axios');
require('dotenv').config();

const FetchAllNews = async (req, res) => {
    try {
        console.log("Received request for fetching news data");
        const response = await axios.get(process.env.ALLNEwSAPI);
        console.log(response);
        res.json(response.data.articles);
    } catch (err) {
        console.error("Error fetching data:", err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}


module.exports = FetchAllNews;
