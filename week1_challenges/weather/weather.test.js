const Weather = require('./weather');

describe('Weather', () => {
    it('gets the weather for Bristol', (done) => {
        const mockWeatherClient = {
            fetchWeatherData: jest.fn()
        };
        mockWeatherClient.fetchWeatherData.mockResolvedValueOnce({
            name: 'Bristol',
            status: 'cloudy'
        });
        const weather = new Weather(mockWeatherClient);
        weather.load('Bristol').then(() => {
            expect(mockWeatherClient.fetchWeatherData).toHaveBeenCalledWith('Bristol');
            expect(weather.getWeatherData().name).toBe('Bristol');
            expect(weather.getWeatherData().status).toBe('cloudy');
            done();
        });
    });
});