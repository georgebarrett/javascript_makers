const Client = require('./weatherClient');

describe('Client', () => {
    it('ensures getWeatherData function works', () => {
        const client = new Client();
        expect(client.getWeatherData()).toEqual([])
    });

    it('gets the name of a city using the api', async () => {
        const client = new Client();
        await client.fetchWeatherData(); 
        expect(client.getWeatherData()[0].name).toEqual('London')
    })
});