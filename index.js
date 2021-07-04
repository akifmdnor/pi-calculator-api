const express = require('express');
const app = express();
const PORT = 5000;
const db = require('./db/pi');
const piCalculator = require('./piCalculator');


app.use(express.json());

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'https://serene-congaree-44767.herokuapp.com');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.listen (
    process.env.PORT || PORT,
    () => console.log(`server running!`)
)

app.get('/latest-pi', async (req, res) => {
    const precision = await db.getCurrentPrecision();
    latestPrecision = precision[0].precision+1;
    latestPi = piCalculator.piWithFixedDecimal(latestPrecision+1);

    request =  {
        value: latestPi,
        precision: latestPrecision,
    };

    await db.updatePiValue(request);
    res.status(200).json({ request });
});

app.get('/pi', async (req, res) => {
    const result = await db.getPi();
    request = result[0];
    res.status(200).json({ request });
});