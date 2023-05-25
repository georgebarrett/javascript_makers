const fetchPokemon = (pokemon) => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((response) => response.json())
    .then((data) => {
        return {
            id: data.id,
            name: data.name,
            height: data.height,
            weight: data.weight,
            type: data.types.map((pokemonType) => pokemonType.type.name) 
        }
    })
}
module.exports = fetchPokemon;




