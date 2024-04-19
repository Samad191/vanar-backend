require('dotenv').config();
const express = require('express');
const cors = require('cors')

const app = express();
const port = 4000;


app.use(cors({ origin: ["http://localhost:3000"] }));
app.use(express.json());

app.get('/getTokenDetails', async (req, res) => {
    try {
        const apiKey = process.env.API_KEY
        const url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=VANRY'

        const response = await fetch(url, {
            headers: {
                'X-CMC_PRO_API_KEY': apiKey,
            },
        })
        const data = await response.json()
        res.json(data)

    } catch (error) {
        res.status(500).send('Error occurred while fetching data: ' + JSON.stringify(error));
    }
});



app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
