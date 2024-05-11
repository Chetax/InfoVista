// Import axios
const axios = require('axios');

// Your route handler
const GetByKeyword = async (req, res) => {
    try {
 
        const { query } = req.body;
        if (!query) {
            return res.status(400).json({ success: false, msg: "Query parameter is missing" });
        }

        const response = await axios.get(`https://newsapi.org/v2/everything?q=${query}&apiKey=${process.env.NEWS_API}`);
        console.log(response.data);
        res.status(200).json({ success: true, DataGot: response.data });
    } catch (err) {
        console.error(err);
        res.status(400).json({ success: false, msg: "Error Occurred While Fetching The News From API" });
    }
}

module.exports = GetByKeyword;