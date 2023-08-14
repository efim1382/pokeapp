import React from "react";
import PropTypes from "prop-types";
import { usePokemonData } from "hooks/pokemonQueries";

const EvolutionPokemon = ({ name }) => {
	const {
		data = {},
		isLoading,
		error,
	} = usePokemonData(name);

	const pokemonImageUrl = data?.sprites?.other.dream_world.front_default;

	if (isLoading || error) {
		return null;
	}

	return (
		<div>
			<img width={300} src={pokemonImageUrl} alt={name} />
			<p>{name}</p>
		</div>
	);
};

EvolutionPokemon.propTypes = {
	name: PropTypes.string.isRequired,
};

export default EvolutionPokemon;
