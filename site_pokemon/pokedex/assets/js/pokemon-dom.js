
    function showModel(){
        const pokemonDivs = document.querySelectorAll('.pokemon')
        const div = document.getElementsByClassName("modelPokemon")
        
        pokemonDivs.forEach((pokemonDiv, index) => {
            pokemonDiv.addEventListener('click', handlePokemonClick);
            
        });
    }

        function handlePokemonClick(e){
            const pokemon = e.target.closest('.pokemon')
            const pokemonList = Array.from(document.querySelectorAll('.pokemon'));
            if (pokemon && pokemonList.includes(pokemon)){
                const pokemonIndex = pokemonList.indexOf(pokemon);
                const pokemonData = pokemon.getAttribute('data-id-pokemon')
                console.log(`Clicou no Pokémon de índice ${pokemonIndex} - Order: ${pokemonData}`);
                console.log(pokemon)

                teste
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



