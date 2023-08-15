import React, { Fragment, Suspense, useEffect, lazy } from "react";
import { NavLink, useLocation, useSearchParams } from "react-router-dom";
import Button, { Container as PaginationContainer } from "components/Button";
import HomeLoading from "./components/Loading";

import {
	Container as CardsContainer,
	Wrapper as CardWrapper,
	Loader as CardLoading,
} from "components/PokemonCard";

import { usePokemonList } from "hooks/pokemonQueries";
import styled from "styled-components";

const PokemonCard = lazy(() => import("components/PokemonCard"));

export const limit = 8;

const CardLink = styled(NavLink)`
	text-decoration: none;
`;

const Home = () => {
	const { search } = useLocation();
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

	useEffect(() => {
		/*
		* In the layout component we scroll to top if the page has changed.
		* But at the home page, we also scroll if query params has changed,
		* because this logic is only on this page
		* */
		window.scrollTo(0, 0);
	}, [search]);

	if (isLoading) {
		return (
			<HomeLoading />
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
						<CardLink to={`/pokemon/${pokemon.name}/`}>
							<Suspense fallback={<CardLoading />}>
								<PokemonCard name={pokemon.name} />
							</Suspense>
						</CardLink>
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
