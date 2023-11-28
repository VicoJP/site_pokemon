
    function showModel(){
        const pokemonDivs = document.querySelectorAll('.pokemon')
        
        pokemonDivs.forEach((pokemonDiv, index) => {
            pokemonDiv.addEventListener('click', function(e){
                const pokemon = e.target.closest('.pokemon')

                if (pokemon){
                    const pokemonData = pokemon.getAttribute('data-id-pokemon')
                }
            })
        })
    
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
}


