export const fetchPokemonList = async () => {
	const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=8");
	return await response.json();
}
