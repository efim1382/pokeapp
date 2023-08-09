import React from "react";
import { useParams, NavLink } from "react-router-dom";
import NotFound from "pages/NotFound";
import { usePokemonDetails } from "hooks/pokemonQueries";

const Details = () => {
	const { pokemonName } = useParams();

	const {
		data = {},
		isLoading,
		error,
	} = usePokemonDetails(pokemonName);

	const {
		id,
		name,
		weight,
	} = data;

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
			<div>Weight: {weight}</div>

			{isPreviousPokemonExist && (
				<NavLink to={`/pokemon/${previousPokemonId}/`}>prev</NavLink>
			)}

			<NavLink to={`/pokemon/${nextPokemonId}/`}>next</NavLink>
		</div>
	);
};

export default Details;
