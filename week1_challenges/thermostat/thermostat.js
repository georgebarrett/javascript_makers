class Thermostat {

    constructor() {
        this.temperature = 20;
        this.powerSavingMode = false;
    }

    getTemperature() {
        return this.temperature;
    }

    up() {
        if (this.temperature >= 25 && this.powerSavingMode === true) {
            return this.temperature = 25         
        } else {
            this.temperature++  
        }
    }

    down() {
        this.temperature--;
    }

    setPowerSavingMode(status) {
        this.powerSavingMode = status;
    }
}

module.exports = Thermostat;