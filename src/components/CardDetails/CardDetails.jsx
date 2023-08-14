import React from "react";
import PropTypes from "prop-types";
import PokemonIllustration from "components/PokemonIllustration";
import Badge, { Row as BadgesRow } from "components/Badge";
import styled from "styled-components";
import { media } from "styles/mixins/media";
import Height from "components/Icons/Height";
import Weight from "components/Icons/Weight";
import Stat from "components/Stat";
import { Col, Row } from "components/Layout";
import { getStats } from "./CardDetails.config";

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

	${media("tablet")} {
		width: 100%;
	}

`;

const CardDetails = ({types, src, name, pokemonId, weight, height, stats}) => {
	const statsList = getStats(stats);
	return (
		<Card>
			<Row
				$margin="0 -2px 56px"
			>
				{types.map(item => (
					<Badge
						className={`type-${item.type.name}`}
						key={item.type.name}
					>
						{item.type.name}
					</Badge>
				))}
			</Row>

			<PokemonIllustration
				$src={src}
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
				{statsList.map(item => (
					<StatCol>
						<Stat key={item.name} name={item.name} value={item.base_stat} />
					</StatCol>
				))}
			</Row>

		</Card>
	);

};

CardDetails.propTypes = {
	types: PropTypes.array,
	src: PropTypes.string,
	name: PropTypes.string,
	pokemonId: PropTypes.string,
	weight: PropTypes.string,
	height: PropTypes.string,
};

export default CardDetails;
