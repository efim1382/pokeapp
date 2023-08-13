import React from "react";
import PropTypes from "prop-types";
import CardIllustration from "components/CardIllustration";
import BadgesRow from "components/Badge/BadgesRow";
import Badge from "components/Badge";
import styled from "styled-components";
import { media } from "styles/mixins/media";
import Row from "components/Layout/Row";
import Height from "components/Icons/Height";
import Weight from "components/Icons/Weight";

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

	.stat-item {
		margin: 0 4px;
		display: flex;
		align-items: center;

		.value {
			color: ${({theme}) => theme.card.stat};
		}
	}

`;

const StyledBadgesRow = styled(BadgesRow)`
	margin-bottom: 56px;

	${media("mobile")} {
		margin-bottom: 24px;
	}
`;

const StyledCardIllustration = styled(CardIllustration)`

`;

const CardDetails = ({types, src, name, pokemonId, weight, height}) => {
	return (
		<Card>
			<Row
				margin="0 -2px 56px"
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

			<CardIllustration
				src={src}
				pokemonId={pokemonId}
			/>
			<Row
				justifyContent="space-between"
				margin="16px -4px"
				width="100%"
			>
				<div className="stat-item">
					<Weight />
					<span className="value">{weight}</span>
				</div>
				<div className="stat-item">
					<Height />
					<span className="value">{height}</span>
				</div>
			</Row>
			<Row
				justifyContent="center"
				margin="0 0 16px 0"
			>
				<h2 className="name">{name}</h2>
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
