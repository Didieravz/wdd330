const url = "https://pokeapi.co/api/v2/pokemon";
let pokemons = null;

// Funcion que realiza peticion acincrona fetch
async function getPokemon(url) {

    const response = await fetch(url);
    // check if the fetch was successful
    if (response.ok) {
        const data = await response.json();
        doStaff(data);
    }
}

function doStaff(data) {
    pokemons = data;
    console.log("firts: ", data);
    pokemons.results.forEach(pokemon => {
        const div = document.createElement('div');
        div.textContent = pokemon.name;
        document.querySelector('main').appendChild(div);

    });
}
getPokemon(url);
console.log("second: ", pokemons);