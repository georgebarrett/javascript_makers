const fetchPokemon = require('./api');

class Pokedex {

    constructor() {
        this.pokemons = [];
    }

    all() {
        return this.pokemons;
    }

    async catch(pokemonName) {
        return fetchPokemon(pokemonName)
        .then(pokemon => {
            this.pokemons.push(pokemon)
        })
    }
}

module.exports = Pokedex;