const apiKey = require('./apiKey');

class WeatherClient {

    constructor() {
        this.apiKey = apiKey;
        this.url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=London&appid=${apiKey}`;
        this.weatherArray = []
    }

    async fetchWeatherData() {
        return this.fetchWeather()
        .then(info => {
            this.weatherArray.push(info)
        }) 
    };

    async fetchWeather() {
        await fetch(this.url)
        .then(response => response.json())
        .then(data => {
            this.weatherArray.push(data)
            return data
        })
    }

    getWeatherData() {
        return this.weatherArray
    };

};

module.exports = WeatherClient