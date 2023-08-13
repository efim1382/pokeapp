import React, { Suspense, lazy } from "react";
import { useSearchParams } from "react-router-dom";
import Button from "components/Button";
import { usePokemonList } from "hooks/pokemonQueries";
import CardsContainer from "components/PokemonCard/CardsContainer";
import CardWrap from "components/PokemonCard/CardWrap";
import PaginationContainer from "components/Button/PaginationContainer";

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
	};

	const handleNextPageClick = () => {
		setSearchParams({
			offset: offset + limit,
		});
	};

	if (isLoading) {
		return <CardsContainer>Loading...</CardsContainer>;
	}

	if (error) {
		return <div>Error: {error.message}</div>;
	}

	return (
		<>
			<CardsContainer>
				{results.map((pokemon) => (
					<Suspense key={pokemon.name} fallback="Loading...">
						<CardWrap>
							<PokemonCard name={pokemon.name} />
						</CardWrap>
					</Suspense>
				))}
			</CardsContainer>


			<PaginationContainer>
				{previous && (
					<Button
						left
						onClick={handlePreviousPageClick}
					>
						Prev
					</Button>
				)}

				{next && (
					<Button
						right
						onClick={handleNextPageClick}
					>
						Next
					</Button>
				)}
			</PaginationContainer>

		</>
	);
};

export default Home;
