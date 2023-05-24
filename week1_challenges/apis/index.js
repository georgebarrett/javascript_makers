const fetchPokemon = require('./api');

fetchPokemon('bulbasaur').then((pokemon) => console.log(pokemon))