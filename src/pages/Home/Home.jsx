import React from "react";
import { useQuery } from "react-query";
import PokemonCard from "components/PokemonCard";
import { fetchPokemonList } from "api/pokemon.api";

const Home = () => {
	const {
		data = {},
		isLoading,
		error,
	} = useQuery(["pokemon-list"], () => fetchPokemonList());

	const { results = [] } = data;

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error.message}</div>;
	}

	return (
		<div>
			{results.map((pokemon) => (
				<PokemonCard key={pokemon.name} name={pokemon.name} />
			))}
		</div>
	);
};

export default Home;
