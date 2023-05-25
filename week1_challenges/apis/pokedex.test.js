const Pokedex = require('./pokedex');

describe('Pokedex', () => {
    it('returns an empty pokemon array', () => {
        const pokedex = new Pokedex();
        expect(pokedex.all()).toEqual([]);
    });

    it('adds a pokemon to the pokemons array', async () => {
        const pokedex = new Pokedex();
        await pokedex.catch('bulbasaur');
        console.log(pokedex.all());
        expect(pokedex.all().length).toEqual(1);
        expect(pokedex.all()[0].name).toEqual('bulbasaur');
    });
});