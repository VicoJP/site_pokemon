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

function convertNumberToHeight(height){
    const heightInCm = height / 10
    const heightFormated = heightInCm.toFixed(2) + 'm';
    return heightFormated
}

function convertNumberToWeight(weight){
    const weightInCm = weight / 10
    const weightFormated = weightInCm.toFixed(2) + 'kg';
    return weightFormated
}

