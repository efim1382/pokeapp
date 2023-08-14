import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const BadgeWrapper = styled.div`
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
`;

const Badge = ({ name }) => (
	<BadgeWrapper className={`type-${name}`}>
		{name}
	</BadgeWrapper>
);

Badge.propTypes = {
	name: PropTypes.string.isRequired,
};

export default Badge;
