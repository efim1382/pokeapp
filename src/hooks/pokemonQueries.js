import { useQuery } from "react-query";
import apiClient from "api/apiClient";

import {
	fetchPokemon,
	fetchPokemonList,
	fetchPokemonSpecies,
} from "api/endpoints";

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
	const {
		data: pokemonData = {},
		isLoading: isPokemonLoading,
		error: pokemonError,
	} = useQuery(
		["pokemon", id],
		() => fetchPokemon(id),
	);

	const specieName = pokemonData?.species?.name;

	const {
		data: species = {},
		isLoading: isSpeciesLoading,
		error: speciesError,
	} = useQuery(
		["pokemon-species", specieName],
		() => fetchPokemonSpecies(specieName),
		{ enabled: !!specieName }
	);

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
};

export const useCustomRequest = (url) => {
	return useQuery(
		["pokemon-custom-request", url],
		() => apiClient.get(url),
	);
};
