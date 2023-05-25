const Pokedex = require('./pokedex');

const pokedex = new Pokedex()

describe('Pokedex', () => {
    it('returns an empty pokemon array', () => {
        expect(pokedex.all()).toEqual([]);
    });
});