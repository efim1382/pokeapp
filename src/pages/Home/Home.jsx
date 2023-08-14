import React, { Fragment, Suspense, lazy } from "react";
import { useSearchParams } from "react-router-dom";
import Button, { Container as PaginationContainer } from "components/Button";
import Loader from "components/Loader";

import {
	Container as CardsContainer,
	Wrapper as CardWrapper,
	Loading as CardLoading,
} from "components/PokemonCard";

import { usePokemonList } from "hooks/pokemonQueries";
import { Row } from "components/Layout";

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
		return (
			<Row
				$minWidth="100%"
				$minHeight="80vh"
				$justifyContent="center"
				$alignItems="center"
			>
				<Loader />
			</Row>
		);
	}

	if (error) {
		return <div>Error: {error.message}</div>;
	}

	return (
		<Fragment>
			<CardsContainer>
				{results.map((pokemon) => (
					<CardWrapper key={pokemon.name}>
						<Suspense fallback={<CardLoading />}>
							<PokemonCard name={pokemon.name} />
						</Suspense>
					</CardWrapper>
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
