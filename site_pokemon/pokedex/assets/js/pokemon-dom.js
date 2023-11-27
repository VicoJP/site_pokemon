document.addEventListener('DOMContentLoaded', function () {
    console.log('Script loaded') 
    setTimeout(500000)
    const pokemonDivs = document.querySelectorAll('.pokemon')
    console.log(pokemonDivs) 

    pokemonDivs.forEach((pokemonDiv, index) => {
        console.log(pokemonDiv)
        pokemonDiv.addEventListener('click', function () {
            const pokemon = pokemonDiv
            console.log(pokemon)
        })
    })
}
)
