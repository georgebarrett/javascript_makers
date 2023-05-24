const Thermostat = require('./thermostat')

const thermostat = new Thermostat();

describe('Thermostat', () => {
    it('should return 20 degrees', () => {
        expect(thermostat.getTemperature()).toBe(20)
    });

    it('should return 22 degrees,', () => {
        thermostat.up();
        thermostat.up();
        expect(thermostat.getTemperature()).toBe(22)
    })
})