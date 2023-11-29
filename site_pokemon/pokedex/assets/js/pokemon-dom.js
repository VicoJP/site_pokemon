
function showModel() {
    const pokemonDivs = document.querySelectorAll('.pokemon')

    pokemonDivs.forEach((pokemonDiv, index) => {
        pokemonDiv.addEventListener('click', handlePokemonClick);
    });
}
let _opened = false

function handlePokemonClick(e) {
    const divPokemon = document.getElementById("modalPokemon")
    const divModal = document.getElementById("divModal")
    if (!_opened){
        const pokemon = e.target.closest('.pokemon')
        const pokemonList = Array.from(document.querySelectorAll('.pokemon'));
        if (pokemon && pokemonList.includes(pokemon)) {
            const pokemonIndex = pokemonList.indexOf(pokemon);
            const pokemonData = pokemon.getAttribute('data-id-pokemon')
    
            pokeApi.getPokemonsTeste(`https://pokeapi.co/api/v2/pokemon/${pokemonIndex + 1}`).then((pokemons = []) => {
            const newHtmlPokeDetail = 
            `<div id="divModal" class="${pokemons.type}">
            <div class="pokemonPhoto">
                    <span class="number">#${pokemons.number}</span>
                    <span class="name">${pokemons.name}</span>                
                    <div class="detail">
                        <ol class="types">
                        ${pokemons.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                        </ol>
                        <img src="${pokemons.photo}" alt="${pokemon.name}">
                    </div>
                </div>
            <div class="pokemonDetails">
                <ol class="about">
                    <li>Height:</li>
                    <li>Weight:</li>
                    <li>Abilities:</li>
                    ${pokemons.statsNames.map((stats) => `<li> ${stats}:</li>`).join('')}</li>
                </ol>
                <ol class="values">
                    <li>${convertNumberToHeight(pokemons.height)}</li>
                    <li>${convertNumberToWeight(pokemons.weight)}</li>
                    <li>${pokemons.abilities.map((ability) => `<span> ${ability}</span>`)}</li>
                    ${pokemons.statsValues.map((stats) => `<li> ${stats}</li>`).join('')}</li>
                    
                </ol>
            </div>
            </div>
            ` 
                divPokemon.innerHTML += newHtmlPokeDetail
            })
            _opened = true
        } 
        } else {
            divPokemon.removeChild(divModal)
            _opened = false
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



