import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { ThemeProvider as Provider } from "styled-components";
import * as colors from "styles/variables/colors";

const theme = {
	light: {
		header: colors.RED,
		bodyBg: colors.BG_LIGHT,
		card: {
			bg: colors.WHITE,
			title: colors.GREEN,
			desc: colors.GRAY,
			stat: colors.BG_LIGHT,
			statIcon: colors.RED
		},
		button: {
			text: colors.GREEN,
			bg: colors.LIGHT_GREEN,
		},
		toggle: {
			filter: "url(#filter0_d_38_3663)",
			topColor: "#3E3E3E",
			line: "#252525",
			circle: "#252525"
		}
	},
	dark: {
		header: colors.DARK,
		bodyBg: colors.BG_DARK,
		card: {
			bg: colors.DARK,
			title: colors.BLUE,
			desc: colors.GRAY,
			stat: colors.BLUE,
			statIcon: colors.BLUE
		},
		button: {
			text: colors.BLUE,
			bg: colors.DARK,
		},
		toggle: {
			filter: "none",
			topColor: "#F8F8F8",
			line: "#FF4C41",
			circle: "#FF4C41"
		}
	},
}

const ThemeProvider = ({children}) => {
	const [isLightTheme, setIsLightTheme] = useState(true);

	useEffect(() => {
		localStorage.setItem('items', JSON.stringify(isLightTheme));
	}, [isLightTheme]);

	const themeHandler = () => setIsLightTheme(!isLightTheme);
	const currentTheme = isLightTheme ? theme.light : theme.dark;

	return (
		<Provider themeHandler={themeHandler} theme={{...currentTheme, themeHandler: themeHandler}}>
			{children}
		</Provider>
	)
}

ThemeProvider.propTypes = {
	children: PropTypes.any.isRequired,
}

export default ThemeProvider;
