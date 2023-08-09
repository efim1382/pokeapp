import { useQuery } from "react-query";
import { fetchPokemon, fetchPokemonList } from "api/endpoints";

export const usePokemonList = (options = {}) => {
	const {
		limit,
		offset,
	} = options;

	return useQuery(
		["pokemon-list", offset],
		() => fetchPokemonList({ offset, limit }),
	);
};

export const usePokemonDetails = (name) => {
	return useQuery(
		["pokemon", name],
		() => fetchPokemon(name),
		{ retry: false },
	);
};

