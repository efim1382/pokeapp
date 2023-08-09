import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { usePokemonDetails } from "hooks/pokemonQueries";

const PokemonCard = ({ name }) => {
	const {
		data = {},
		isLoading,
		isSuccess,
	} = usePokemonDetails(name);

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
