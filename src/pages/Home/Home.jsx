import React from "react";
import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";
import PokemonCard from "components/PokemonCard";
import { fetchPokemonList } from "api/pokemon.api";

const limit = 8;

const Home = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const offset = Number(searchParams.get("offset")) || 0;

	const {
		data = {},
		isLoading,
		error,
	} = useQuery(["pokemon-list", offset], () => fetchPokemonList({ offset, limit }));

	const {
		results = [],
		previous,
		next,
	} = data;

	const handlePreviousPageClick = () => {
		setSearchParams({
			offset: offset < limit
				? 0
				: offset - limit,
		});
	}

	const handleNextPageClick = () => {
		setSearchParams({
			offset: offset + limit,
		});
	}

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

			{previous && (
				<button
					onClick={handlePreviousPageClick}
				>
					Prev
				</button>
			)}

			{next && (
				<button
					onClick={handleNextPageClick}
				>
					Next
				</button>
			)}
		</div>
	);
};

export default Home;
