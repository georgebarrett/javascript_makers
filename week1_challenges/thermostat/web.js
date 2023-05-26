const express = require('express');
const app = express();
const port = 3000;

const Thermostat = require('./thermostat');
const thermostat = new Thermostat();

app.get('/', (req, res) => {
    res.send('Thermostat homepage!')
});

app.get('/temperature', (req, res) => {
    temperatureObject = {
        "temperature":thermostat.getTemperature()
    };
    res.send(JSON.stringify(temperatureObject))
});

app.post('/up', (req, res) => {
    thermostat.up();
    res.send(null)
});

app.post('/down', (req, res) => {
    thermostat.down();
    res.send(null)
});

app.delete('/temperature', (req, res) => {
    thermostat.reset();
    res.send(null)
});

console.log(`Server listening on localhost:${port}`);
app.listen(port);

