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
    });

    it('should return 18 degrees,', () => {
        thermostat.down();
        thermostat.down();
        expect(thermostat.getTemperature()).toBe(20)
    });

    it('it should be 25 instead of 26 due to power saving mode', () => {
        thermostat.setPowerSavingMode(true);
        thermostat.up();
        thermostat.up();
        thermostat.up();
        thermostat.up();
        thermostat.up();
        thermostat.up();
        expect(thermostat.getTemperature()).toBe(25)
    })

    it('should resent the thermostat', () => {
        thermostat.reset();
        expect(thermostat.getTemperature()).toBe(20)
    })
})