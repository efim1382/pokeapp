import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchPokemon } from "api/pokemon.api";

const PokemonCard = ({ name }) => {
	const {
		data = {},
		isLoading,
		isSuccess,
	} = useQuery(["pokemon", name], () => fetchPokemon(name));

	const avatarUrl = `https://img.pokemondb.net/artwork/large/${name}.jpg`;

	const {
		height,
		weight,
	} = data;

	return (
		<NavLink to={`/pokemon/${name}/`}>
			<p>{name}</p>
			<img width="300" src={avatarUrl} alt={name} />

			{isLoading && (
				<p>Loading details data...</p>
			)}

			{isSuccess && (
				<Fragment>
					<p>Weight: {weight}</p>
					<p>Height: {height}</p>
				</Fragment>
			)}
		</NavLink>
	);
};

PokemonCard.propTypes = {
	name: PropTypes.string.isRequired,
}

export default PokemonCard;
