import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import Height from "./Height";
import Weight from "./Weight";
import { usePokemonDetails } from "hooks/pokemonQueries";
import { getDescription } from "helpers/pokemonHelpers";
import LoadingCard from "./LoadingCard";
import styled from "styled-components";
import { useMedia } from "hooks/useMedia";

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

	.badges-row {
		display: flex;
		margin: 0 -2px;
	}

	.badge {
		display: flex;
		padding: 0 8px;
		margin: 0 2px;
		border-radius: 4px;
		align-items: center;
		color: #FFF;
		text-align: center;
		font-size: 10px;
		font-weight: 700;
		line-height: 2;
		text-transform: uppercase;

		&.type-normal {
			background-color: #A8A878;
		}



		&.type-fire {
			background-color: #F08030;
		}



		&.type-water {
			background-color: #6890F0;
		}



		&.type-grass {
			background-color: #78C850;
		}



		&.type-electric {
			background-color: #F8D030;
		}



		&.type-ice {
			background-color: #98D8D8;
		}



		&.type-fighting {
			background-color: #C03028;
		}



		&.type-poison {
			background-color: #A040A0;
		}



		&.type-ground {
			background-color: #E0C068;
		}



		&.type-flying {
			background-color: #A890F0;
		}



		&.type-psychic {
			background-color: #F85888;
		}



		&.type-bug {
			background-color: #A8B820;
		}



		&.type-rock {
			background-color: #B8A038;
		}



		&.type-ghost {
			background-color: #705898;
		}



		&.type-dragon {
			background-color: #7038F8;
		}



		&.type-dark {
			background-color: #705848;
		}



		&.type-steel {
			background-color: #B8B8D0;
		}



		&.type-fairy {
			background-color: #F0B6BC;
		}



		&.type-unknown {
			background-color: #6AA596;
		}

	}

	.stats {
		display: flex;
		margin: 0 -8px;
	}

	.stat-item {
		margin: 0 4px;
		display: flex;
		align-items: center;

		.value {
			color: ${({theme}) => theme.card.stat};
		}
	}
`;

const Image = styled.img`
	width: 182px;
	height: 182px;
	position: relative;

	&:before {
		content: "hfw876";
		color: ${({theme}) => theme.card.title};
		font-size: 96px;
		font-style: normal;
		font-weight: 700;
		line-height: 112px;
		display: block;
		position: absolute;
		top: 40px;
		left: 50%;
		opacity: .05;
		transform: translateX(50%);
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
			<LoadingCard/>
		);
	}

	const {
		details = {},
		species = {},
	} = data;

	const {
		height,
		weight,
		sprites = {},
		types = [],
	} = details;

	const { flavor_text_entries } = species;
	const description = getDescription(flavor_text_entries);

	return (
		<Card data-testid="pokemon-card">
			<TopBar>
				<div className="badges-row">
					{types.map((item) => (
						<span className={`badge type-${item.type.name}`} key={item.type.name}>{item.type.name}</span>
					))}
				</div>

				{!isMobile && (
					<div className="stats">
						<span className="stat-item"><Height /><span className="value">{height}</span></span>
						<span className="stat-item"><Weight /> <span className="value" data-testid="pokemon-card-weight">{weight}</span></span>
					</div>
				)}

			</TopBar>

			<NavLink to={`/pokemon/${name}/`}>
				<Image
					src={sprites.other.dream_world.front_default}
					alt={name}
				/>
			</NavLink>

			<h2 className="name">{name}</h2>
			<span className="desc">{description}</span>
		</Card>
	);
};

PokemonCard.propTypes = {
	name: PropTypes.string.isRequired,
};

export default PokemonCard;
