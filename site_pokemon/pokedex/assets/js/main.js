const pokemonOl = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById("loadMore")


const maxRecords = 151
const limit = 10
let offset = 0

function loadPokemonItens(offset, limit) {

    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) => `
        <li onclick=showModel() data-id-pokemon="${pokemon.number}" class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>                
            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>
                <img src="${pokemon.photo}" alt="${pokemon.name}">
            </div>
        </li>
    `).join('')
        pokemonOl.innerHTML += newHtml
    })
        .catch((error) => console.log(error))
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit

    const qtdRecord = offset + limit
    debugger
    if (qtdRecord >= maxRecords) {
        const newLimit = maxRecords - offset 
        loadPokemonItens(offset, newLimit)
        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }
    
})

// vou ter que criar um array que vai guardar os detalhes do pokemon, mudar umas funções que pegam os detalhes do pokemon e passar como parametro o indice