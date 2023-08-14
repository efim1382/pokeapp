import React from "react";
import PropTypes from "prop-types";
import Badge from "components/Badge";
import Height from "components/Icons/Height";
import Weight from "components/Icons/Weight";
import Stat from "./components/Stat";
import PokemonIllustration from "components/PokemonIllustration";
import { Col, Row } from "components/Layout";
import { getBeautifiedId } from "helpers/pokemonHelpers";
import styled from "styled-components";
import { media } from "styles/mixins/media";

const Card = styled.div`
	display: flex;
	width: 100%;
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

	.stat-item {
		margin: 0 4px;
		display: flex;
		align-items: center;

		.value {
			color: ${({theme}) => theme.card.stat};
		}
	}
`;

const StatCol = styled(Col)`
	width: 50%;
	padding: 16px 6px 0;

	${media("mobile")} {
		width: 100%;
	}
`;

const CardDetails = (props) => {
	const {
		id,
		name,
		height,
		weight,
		sprites = {},
		types = [],
		stats = [],
	} = props;

	const pokemonImageUrl = sprites?.other?.dream_world.front_default;
	const pokemonId = getBeautifiedId(id);

	return (
		<Card>
			<Row
				$margin="0 -2px 56px"
			>
				{types.map((item) => (
					<Badge
						key={item.type.name}
						name={item.type.name}
					/>
				))}
			</Row>

			<PokemonIllustration
				$src={pokemonImageUrl}
				$pokemonId={pokemonId}
			/>

			<Row
				$justifyContent="space-between"
				$margin="16px -4px"
				$width="100%"
			>
				<div className="stat-item">
					<Weight />
					<span data-testid="pokemon-weight" className="value">{weight}</span>
				</div>

				<div className="stat-item">
					<Height />
					<span data-testid="pokemon-height" className="value">{height}</span>
				</div>
			</Row>

			<Row
				$justifyContent="center"
				$margin="0 0 16px 0"
			>
				<h2 className="name" data-testid="pokemon-name">{name}</h2>
			</Row>

			<Row
				$margin="-16px -6px 0"
			>
				{stats.map((item) => (
					<StatCol key={item.stat.name}>
						<Stat name={item.stat.name} value={item.base_stat} />
					</StatCol>
				))}
			</Row>
		</Card>
	);
};

CardDetails.propTypes = {
	id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	weight: PropTypes.number.isRequired,
	height: PropTypes.number.isRequired,

	stats: PropTypes.arrayOf(PropTypes.shape({
		base_stat: PropTypes.number,

		stat: PropTypes.objectOf({
			name: PropTypes.string,
		}),
	})).isRequired,

	types: PropTypes.arrayOf(PropTypes.shape({
		type: PropTypes.objectOf({
			name: PropTypes.string,
		}),
	})).isRequired,

	sprites: PropTypes.objectOf({
		other: PropTypes.objectOf({
			dream_world: PropTypes.objectOf({
				front_default: PropTypes.string,
			}),
		}),
	}),
};

export default CardDetails;
