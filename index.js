
renderPokemon()


async function renderPokemon() {
    let data = await getPokemonLinks()
    for (const pokemonLink of data.results) {
        const res = await fetch(`${pokemonLink.url}`)
        const pokemon = await res.json()
        const pokemonEl = document.createElement("div")
        pokemonEl.classList.add("pokemon")
        pokemonEl.innerHTML = getPokemonInnerHtml(pokemon)
        document.body.appendChild(pokemonEl)
    }
}



// https://pokeapi.co/api/v2/pokemon?limit=1118


async function getPokemonLinks() {
    let res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1118")
    let data = await res.json()
    return data
}

function getPokemonInnerHtml(pokemon) {
    return `
        <div class="pokemon-name-id">
            <h2>#${pokemon.id} <span class="cap">${pokemon.name}</span></h2>
        </div>
        <img src="${pokemon.sprites.front_default}" alt="">
        <div class="types">
            <p>${pokemon.types.map(elem => elem.type.name).join(" / ")}</p>
        </div>
    `
}