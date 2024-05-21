// fetchNews.js - News fetching function

const axios = require("axios").default;

async function fetchNews(req, res) {
    try {
        // Extract the keyword from the query parameters
        const keyword = req.query.keyword || 'Bitcoin'; // Default to 'Bitcoin' if no keyword is provided

        const options = {
            method: 'GET',
            url: 'https://api.newscatcherapi.com/v2/search',
            params: { q: keyword, lang: 'en', sort_by: 'relevancy', page: '1' },
            headers: {
                'x-api-key': process.env.your_key_1,
                'content-type': 'application/json',
            }
        };

        const response = await axios.request(options);
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = fetchNews; // Export the fetchNews function
