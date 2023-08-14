import { createGlobalStyle } from "styled-components";
import PTSansRegular from "styles/fonts/PTSans-Regular.ttf";
import PTSansBold from "styles/fonts/PTSans-Bold.ttf";

const GlobalStyles = createGlobalStyle`
	*,
	*::before,
	*::after {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: inherit;
	}

	a {
		color: ${({theme}) => theme.link};
	}

	@font-face {
		font-family: 'PT Sans';
		src: local('PT Sans'), local('FontName'),
		url(${PTSansRegular}) format('ttf');
		font-weight: 400;
		font-style: normal;
	}

	@font-face {
		font-family: 'PT Sans';
		src: local('PT Sans'), local('FontName'),
		url(${PTSansBold}) format('ttf');
		font-weight: 700;
		font-style: normal;
	}

	body {
		background-color: ${({theme}) => theme.bodyBg};
		color: #888;
		font-family: "PT Sans", sans-serif;
		overflow-x: hidden;
		font-size: 16px;
	}
`;

export default GlobalStyles;
