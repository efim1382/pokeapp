export const fetchPokemonList = async (params = {}) => {
	const {
		offset = 0,
		limit = 12,
	} = params;

	const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`);
	return await response.json();
};

export const fetchPokemon = async (id) => {
	const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
	return await response.json();
};
