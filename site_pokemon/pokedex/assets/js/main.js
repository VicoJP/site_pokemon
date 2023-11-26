
function convertPokemonToLi(pokemon) {
    return `
    <li class="pokemon">
    <span class="number">teste</span>
    <span class="name">${pokemon.name}</span>                

    <div class="detail">
        <ol class="types">
            <li class="type">Grass</li>
            <li class="type">Poison</li>
        </ol>

        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/5.svg" alt="${pokemon.name}">
    </div>
</li>
    `
}
const pokemonOl = document.getElementById('pokemonList')

pokeApi.getPokemons().then((pokemonList = []) => {
    pokemonOl.innerHTML += pokemonList.map(convertPokemonToLi).join('')
})
    .catch((error) => console.log(error))
