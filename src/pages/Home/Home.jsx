import React, { Fragment, Suspense, lazy } from "react";
import { useSearchParams } from "react-router-dom";
import Button, { Container as PaginationContainer } from "components/Button";

import {
	Container as CardsContainer,
	Wrapper as CardWrapper,
} from "components/PokemonCard";

import { usePokemonList } from "hooks/pokemonQueries";

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
		<Fragment>
			<CardsContainer>
				{results.map((pokemon) => (
					<Suspense key={pokemon.name} fallback="Loading...">
						<CardWrapper>
							<PokemonCard name={pokemon.name} />
						</CardWrapper>
					</Suspense>
				))}
			</CardsContainer>

			<PaginationContainer>
				{previous && (
					<Button
						withLeftArrow
						onClick={handlePreviousPageClick}
					>
						Prev
					</Button>
				)}

				{next && (
					<Button
						withRightArrow
						onClick={handleNextPageClick}
					>
						Next
					</Button>
				)}
			</PaginationContainer>
		</Fragment>
	);
};

export default Home;