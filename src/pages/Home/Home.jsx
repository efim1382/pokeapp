import React, { Suspense, lazy } from "react";
import { useSearchParams } from "react-router-dom";
import Button from "components/Button";
import { usePokemonList } from "hooks/pokemonQueries";
import CardsContainer from "components/PokemonCard/CradsContainer";
import CardWrap from "components/PokemonCard/CardWrap";
const PokemonCard = lazy(() => import("components/PokemonCard"));

const limit = 8;

const Home = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const offset = Number(searchParams.get("offset")) || 0;

	const {
		data = {},
		isLoading,
		error,
	} = usePokemonList({ offset, limit });

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
			<CardsContainer>
				{results.map((pokemon) => (
					<Suspense key={pokemon.name} fallback="Loading...">
						<CardWrap>
							<PokemonCard name={pokemon.name} />
						</CardWrap>
					</Suspense>
				))}
			</CardsContainer>

			{previous && (
				<Button
					onClick={handlePreviousPageClick}
				>
					Prev
				</Button>
			)}

			{next && (
				<Button
					onClick={handleNextPageClick}
				>
					Next
				</Button>
			)}
		</div>
	);
};

export default Home;
