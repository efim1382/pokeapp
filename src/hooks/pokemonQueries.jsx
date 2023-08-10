import { useQuery } from "react-query";
import {fetchPokemon, fetchPokemonList, fetchPokemonSpecies} from "api/endpoints";

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

export const usePokemonDetails = (id) => {
	return useQuery(
		["pokemon", id],
		() => fetchPokemon(id),
		{ retry: false },
	);
};

export const usePokemonSpecies = (id) => {
	return useQuery(
		["pokemon-species", id],
		() => fetchPokemonSpecies(id),
		{ retry: false },
	);
};

export const usePokemonFullDetails = (id) => {
	const {
		data: pokemonData = {},
		isLoading: isPokemonLoading,
		error: pokemonError,
	} = usePokemonDetails(id);

	const {
		data: species = {},
		isLoading: isSpeciesLoading,
		error: speciesError,
	} = usePokemonSpecies(id);

	const isLoading = isPokemonLoading || isSpeciesLoading;
	const error = pokemonError || speciesError;

	return {
		data: {
			details: pokemonData,
			species: species,
		},

		isLoading,
		error,
	};
}
