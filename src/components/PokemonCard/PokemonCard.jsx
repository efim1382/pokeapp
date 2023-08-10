import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { usePokemonDetails } from "hooks/pokemonQueries";
import Height from "./Height";
import Weight from "./Height";
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
		isSuccess,
	} = usePokemonDetails(name);

	const avatarUrl = `https://img.pokemondb.net/artwork/large/${name}.jpg`;

	const {
		height,
		weight,
	} = data;

	return (
		<NavLink to={`/pokemon/${name}/`}>
			<Card>
				<TopBar>
					<div></div>
					{isSuccess && (
						<div className="stats">
							<span className="stat-item"><Weight/> <span className="value">{weight}</span></span>
							<span className="stat-item"><Height/><span className="value">{height}</span></span>
						</div>
					)}
				</TopBar>
				<Image
					src={avatarUrl}
					alt={name}
				/>

				<p>{name}</p>

				{isLoading && (
					<p>Loading details data...</p>
				)}
			</Card>
		</NavLink>
	);
};

PokemonCard.propTypes = {
	name: PropTypes.string.isRequired,
}

export default PokemonCard;
