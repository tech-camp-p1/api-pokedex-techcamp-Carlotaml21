const poke_container = document.getElementById('poke-container')
const pokemon_count = 151;
const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
}
const defaultColor = '#f0f0f0';

async function fetchPokemons() {
	for (let i = 1; i <= pokemon_count; i++) {
	  await fetchPokemon(i);
	}
  }
  async function fetchPokemon(id) {
	const url = `https://pokeapi.co/api/v2/pokemon/${id}`; 
	const response = await fetch(url); 
	const data = await response.json(); 
	createPokemonCard(data);
  }
 
function createPokemonCard(pokemon) {
	const pokemonEl = document.createElement("div"); 
	pokemonEl.classList.add("pokemon"); 
  
	const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
	const id = pokemon.id.toString().padStart(3, "0"); 
	const pokeType = pokemon.types[0].type.name; 
	const color = colors[pokeType] || defaultColor; 
  
	pokemonEl.style.backgroundColor = color; 
  
	
	const pokemonInnerHTML = `
	  <div class="img-container">
		<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png" alt="${name}">
	  </div>
	  <div class="info">
		<span class="number">#${id}</span>
		<h3 class="name">${name}</h3>
		<small class="type">Type: <span>${pokeType}</span></small>
	  </div>
	`;
  
	pokemonEl.innerHTML = pokemonInnerHTML; 
	poke_container.appendChild(pokemonEl);
  }

  fetchPokemons();
  

