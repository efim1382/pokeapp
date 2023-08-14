import React from "react";
import PropTypes from "prop-types";
import Height from "components/Icons/Height";
import Weight from "components/Icons/Weight";
import PokemonIllustration from "components/PokemonIllustration";
import LoadingCard from "./styled/LoadingCard";
import Badge, { Row as BadgesRow } from "components/Badge";
import { Row } from "components/Layout";
import { usePokemonDetails } from "hooks/pokemonQueries";
import { useMedia } from "hooks/useMedia";
import { getDescription } from "helpers/pokemonHelpers";
import styled from "styled-components";

const Card = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	padding: 16px;
	flex-direction: column;
	align-items: center;
	gap: 16px;
	border-radius: 16px;
	background-color: ${({theme}) => theme.card.bg};
	text-decoration: none;
	box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.06);

	.name {
		font-size: 32px;
		text-transform: capitalize;
		font-style: normal;
		font-weight: 400;
		line-height: 32px;
		color: ${({theme}) => theme.card.title};
		padding-bottom: 8px;
	}

	.desc {
		font-size: 14px;
		font-style: normal;
		font-weight: 400;
		line-height: 18px;
		color: ${({theme}) => theme.card.desc};
		text-align: center;
	}
`;

const TopBar = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	padding-bottom: 40px;

	.stat-item {
		margin: 0 4px;
		display: flex;
		align-items: center;

		.value {
			color: ${({theme}) => theme.card.stat};
		}
	}
`;

const PokemonCard = ({ name }) => {
	const {
		data = {},
		isLoading,
	} = usePokemonDetails(name);

	const isMobile = useMedia("(max-width: 480px)");

	if (isLoading) {
		return (
			<LoadingCard />
		);
	}

	const {
		details = {},
		species = {},
	} = data;

	const {
		id,
		height,
		weight,
		sprites = {},
		types = [],
	} = details;

	const pokemonImageUrl = sprites.other.dream_world.front_default;
	const { flavor_text_entries } = species;
	const description = getDescription(flavor_text_entries);
	const pokemonId = String(id).padStart(4, "0");

	return (
		<Card data-testid="pokemon-card">
			<TopBar>
				<BadgesRow>
					{types.map((item) => (
						<Badge
							name={item.type.name}
							key={item.type.name}
						/>
					))}
				</BadgesRow>

				{!isMobile && (
					<Row
						$width="auto"
						$margin="0 -8px"
					>
						<span className="stat-item">
							<Height />
							<span className="value">{height}</span>
						</span>

						<span className="stat-item">
							<Weight />
							<span className="value">{weight}</span>
						</span>
					</Row>
				)}
			</TopBar>

			<PokemonIllustration
				$src={pokemonImageUrl}
				$pokemonId={pokemonId}
				data-testid="illustration"
			/>

			<h2 className="name" data-testid="pokemon-name">{name}</h2>
			<span className="desc">{description}</span>
		</Card>
	);
};

PokemonCard.propTypes = {
	name: PropTypes.string.isRequired,
};

export default PokemonCard;
