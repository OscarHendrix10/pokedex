
function consultarPokemon(){
    let info;
    let name = document.getElementById('Pokemon').value;
    fetch('https://pokeapi.co/api/v2/pokemon/'+name)
    .then(response => response.json())
    .then(data => document.getElementById('info').innerHTML = `<img class="imagenpokemon" src="${data.sprites.front_default}" alt="${data.name}">` +
    `<h2 class="nombrepoke">${data.name}</h2>` +	
    `<p class="altura">Altura: ${data.height}</p>` +
    `<p class="peso">Peso: ${data.weight}</p>` +
    `<p class="tipo">Tipo: ${data.types[0].type.name}</p>` +
    `<p class="habilidad1">Habilidades: ${data.abilities[0].ability.name}</p>` 
    )
    
}

