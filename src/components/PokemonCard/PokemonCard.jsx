import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import Height from "./Height";
import Weight from "./Weight";
import { usePokemonDetails } from "hooks/pokemonQueries";
import { getAvatarUrl, getDescription } from "helpers/pokemonHelpers";
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
`;

const TopBar = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	padding-bottom: 40px;

	.stats {
		display: flex;
		margin: 0 -8px;
	}

	.stat-item {
		margin: 0 4px;
		display: flex;
		align-items: center;

		.text {
			color: ${({theme}) => theme.card.stat};
		}
	}
`;

const Image = styled.img`
	max-width: 182px;
`;

const PokemonCard = ({ name }) => {
	const {
		data = {},
		isLoading,
	} = usePokemonDetails(name);

	if (isLoading) {
		return (
			<div>Loading...</div>
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
		types = [],
	} = details;

	const { flavor_text_entries } = species;
	const description = getDescription(flavor_text_entries);
	const avatarUrl = getAvatarUrl(id);

	return (
		<NavLink to={`/pokemon/${name}/`}>
			<Card data-testid="pokemon-card">
				<TopBar>
					<div>
						{types.map((item) => (
							<span key={item.slot}>{item.type.name}</span>
						))}
					</div>

					<div className="stats">
						<span className="stat-item"><Weight /> <span className="value" data-testid="pokemon-card-weight">{weight}</span></span>
						<span className="stat-item"><Height /><span className="value">{height}</span></span>
					</div>
				</TopBar>

				<Image
					src={avatarUrl}
					alt={name}
				/>

				<p>{name}</p>
				<p>{description}</p>
			</Card>
		</NavLink>
	);
};

PokemonCard.propTypes = {
	name: PropTypes.string.isRequired,
};

export default PokemonCard;
