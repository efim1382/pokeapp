import apiClient from "./apiClient";

export const fetchPokemonList = (params = {}) => {
	const {
		offset = 0,
		limit = 12,
	} = params;

	return apiClient.get(`/pokemon/?limit=${limit}&offset=${offset}`);
};

export const fetchPokemon = async (id) => apiClient.get(`/pokemon/${id}/`);
