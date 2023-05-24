const fetchPokemon = require('./api');

describe('fetchPokemon', () => {
    it('can fetch the data for bulbasaur', (done) => {
      fetchPokemon('bulbasaur').then((pokemon) => {
          expect(pokemon.id).toEqual(1);
          expect(pokemon.name).toEqual('bulbasaur');
          expect(pokemon.height).toEqual(7);
          expect(pokemon.weight).toEqual(69);
          done();
        });
    });
  });