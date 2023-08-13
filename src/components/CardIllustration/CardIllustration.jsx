import styled from "styled-components";

const CardIll = styled.div`
	width: 182px;
	height: 182px;
	position: relative;
	background-image: url(${({src}) => src});
	background-repeat: no-repeat;
	background-size: contain;

	&:before {
		content: ${({pokemonId}) => `"#${pokemonId}"`};
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

	&:after {
		content: "";
		position: relative;
		display: block;
		width: 100%;
		height: 100%;
		background-image: url(${({src}) => src});
		background-repeat: no-repeat;
		background-size: contain;
		z-index: 1;
	}
`;

const CardIllustration = (props) => <CardIll {...props} />;

export default CardIllustration;
