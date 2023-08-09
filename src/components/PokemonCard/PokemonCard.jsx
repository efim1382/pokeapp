import React from "react";

const PokemonCard = ({ name }) => {
	const avatarUrl = `https://img.pokemondb.net/artwork/large/${name}.jpg`;

	return (
		<div>
			<p>{name}</p>
			<img width="300" src={avatarUrl} alt={name} />
		</div>
	);
};

export default PokemonCard;
