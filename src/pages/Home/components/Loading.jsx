import React from "react";

import {
	Container as CardsContainer,
	Loader as CardLoader,
	Wrapper as CardWrapper,
} from "components/PokemonCard";

import { limit } from "pages/Home";

const Loading = () => {
	const array = [...Array(limit).keys()];

	return (
		<CardsContainer>
			{array.map((item) => (
				<CardWrapper key={item}>
					<CardLoader />
				</CardWrapper>
			))}
		</CardsContainer>
	);
};

export default Loading;
