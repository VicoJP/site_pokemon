
function showModel() {
    const pokemonDivs = document.querySelectorAll('.pokemon')
    const div = document.getElementsByClassName("modelPokemon")

    pokemonDivs.forEach((pokemonDiv, index) => {
        pokemonDiv.addEventListener('click', handlePokemonClick);

    });
}

function handlePokemonClick(e) {
    const divPokemon = document.getElementsByClassName("modelPokemon")
    const pokemon = e.target.closest('.pokemon')
    const pokemonList = Array.from(document.querySelectorAll('.pokemon'));
    if (pokemon && pokemonList.includes(pokemon)) {
        const pokemonIndex = pokemonList.indexOf(pokemon);
        const pokemonData = pokemon.getAttribute('data-id-pokemon')

        pokeApi.getPokemonsTeste(`https://pokeapi.co/api/v2/pokemon/${pokemonIndex + 1}`).then((pokemons = []) => {
        console.log(pokemons)
        const newHtmlPokeDetail = 
        `<div class="pokemonPhoto">
                <span class="number">#1</span>
                <span class="name">Bulbasaur</span>                
                <div class="detail">
                    <ol class="types">
                        <li class="type">grass</li>
                        <li class="type">grass</li>
                    </ol>
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="">
                </div>
            </div>
        <div class="pokemonDetails">
            <ol class="about">
                <li>Species</li>
                <li>Species</li>
                <li>Species</li>
                <li>Species</li>
            </ol>
            <ol class="values">
                <li>Seed</li>
                <li>Seed</li>
                <li>Seed</li>
                <li>Seed</li>
            </ol>
        </div>
        ` 
            divPokemon.innerHTML += newHtmlPokeDetail

        })
        console.log(`Clicou no Pokémon de índice ${pokemonIndex} - Order: ${pokemonData}`);
        console.log(pokemon)
    }
}


document.addEventListener('DOMContentLoaded', showModel);


// console.log('Script loaded')
// setTimeout(500000)
// const pokemonDivs = document.querySelectorAll('.pokemon')
// console.log(pokemonDivs)

// pokemonDivs.forEach((pokemonDiv, index) => {
//     console.log(pokemonDiv)
//     pokemonDiv.addEventListener('click', function () {
//         const pokemon = pokemonDiv
//         console.log(pokemon)
//     })
// })



