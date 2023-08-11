import React from "react";
import { useParams, NavLink } from "react-router-dom";
import NotFound from "pages/NotFound";
import Evolution from "./Evolution";
import { usePokemonFullDetails } from "hooks/pokemonQueries";

const Details = () => {
	const { pokemonName } = useParams();

	const {
		data = {},
		isLoading,
		error,
	} = usePokemonFullDetails(pokemonName);

	const { details, species } = data;
	const { evolution_chain = {} } = species;

	const {
		id,
		name,
		weight,
	} = details;

	const avatarUrl = `https://img.pokemondb.net/artwork/large/${name}.jpg`;
	const previousPokemonId = id - 1;
	const nextPokemonId = id + 1;
	const isPreviousPokemonExist = previousPokemonId > 0;

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (error) {
		if (error.code === 404) {
			return (
				<NotFound />
			);
		}

		return <div>Error: {error.message}</div>;
	}

	return (
		<div>
			<img width="300" src={avatarUrl} alt={pokemonName} />
			<div>Name: {name}</div>
			<div data-testid="pokemon-weight">Weight: {weight}</div>

			{isPreviousPokemonExist && (
				<NavLink to={`/pokemon/${previousPokemonId}/`}>prev</NavLink>
			)}

			<NavLink to={`/pokemon/${nextPokemonId}/`}>next</NavLink>

			{evolution_chain.url && (
				<Evolution url={evolution_chain.url} />
			)}
		</div>
	);
};

export default Details;
