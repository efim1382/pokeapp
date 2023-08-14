import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { usePokemonData } from "hooks/pokemonQueries";
import { ThemePreferenceContext } from "store/ThemeProvider";
import { ReactComponent as BubbleIllustrationLight } from './svg/buble-light-theme.svg';
import { ReactComponent as BubbleIllustrationDark } from './svg/bubble-dark-theme.svg';

const Container = styled.div`
	position: relative;
	width: 128px;
	height: 128px;
	margin-bottom: 40px;

	&:after {
		content: "";
		display: block;
		width: 68%;
		height: 68%;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background-image: url(${({$url}) => $url});
		background-repeat: no-repeat;
		background-size: contain;
		background-position: center;
		z-index: 1;
	}

	svg {
		position: absolute;
		width: 132%;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.name {
		position: absolute;
		bottom: -8px;
		left: 50%;
		text-transform: capitalize;
		transform: translate(-50%, 100%);
		font-size: 24px;
		font-style: normal;
		font-weight: 400;
		line-height: 32px;
		color: ${({theme}) => theme.evoText};
	}
`;

const EvolutionPokemon = ({ name }) => {
	const { currentTheme } = useContext(ThemePreferenceContext);
	const isLightTheme = currentTheme === "light";

	const {
		data = {},
		isLoading,
		error,
	} = usePokemonData(name);

	const pokemonImageUrl= data?.sprites?.other.dream_world.front_default;

	if (isLoading || error) {
		return null;
	}

	return (
		<Container
			$url={pokemonImageUrl}
		>
			{isLightTheme ? (
				<BubbleIllustrationLight />
			) : (
				<BubbleIllustrationDark />
			)}

			<div className="name">{name}</div>
		</Container>
	);
};

EvolutionPokemon.propTypes = {
	name: PropTypes.string.isRequired,
};

export default EvolutionPokemon;
