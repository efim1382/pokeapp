import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { ReactComponent as DefaultIllustration } from "pages/NotFound/svg/illustration.svg";

const StyledIllustration = styled.div`
	width: 182px;
	height: 182px;
	position: relative;
	background-image: url(${({$src}) => $src});
	background-repeat: no-repeat;
	background-size: contain;

	&:before {
		content: ${({$pokemonId}) => `"#${$pokemonId}"`};
		color: ${({theme}) => theme.card.title};
		font-size: 96px;
		width: 100%;
		height: 100%;
		font-style: normal;
		font-weight: 700;
		line-height: 112px;
		display: flex;
		justify-content: center;
		position: absolute;
		top: -40px;
		opacity: .05;
	}
`;

const StyledDefaultIllustration = styled(DefaultIllustration)`
	width: 100%;
	height: 100%;
`;

const PokemonIllustration = (props) => {
	const { $src } = props;

	return (
		<StyledIllustration {...props}>
			{!$src && (
				<StyledDefaultIllustration />
			)}
		</StyledIllustration>
	);
};

PokemonIllustration.propTypes = {
	$pokemonId: PropTypes.string.isRequired,
	$src: PropTypes.string,
};

export default PokemonIllustration;
