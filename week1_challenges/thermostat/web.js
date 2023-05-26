const express = require('express');
const app = express();
const port = 3000;

const Thermostat = require('./thermostat');
const thermostat = new Thermostat();

app.get('/', (req, res) => {
    res.send('Thermostat homepage!')
});

console.log(`Server listening on localhost:${port}`);
app.listen(port)

