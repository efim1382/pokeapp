import React from "react";
import { ThemeProvider as Provider } from "styled-components";
import * as colors from "../../styles/variables/colors";

const theme = {
	light: {
		header: colors.RED,
		bodyBg: colors.BG_LIGHT,
		card: {
			bg: colors.WHITE,
			title: colors.GREEN,
			desc: colors.GRAY,
			stat: colors.BG_LIGHT
		},
		button: {
			text: colors.GREEN,
			bg: colors.LIGHT_GREEN,
		}
	},
	dark: {
		header: colors.DARK,
		bodyBg: colors.BG_DARK,
		card: {
			bg: colors.DARK,
			title: colors.BLUE,
			desc: colors.GRAY,
			stat: colors.BG_LIGHT
		},
		button: {
			text: colors.BLUE,
			bg: colors.DARK,
		}
	},
}

const ThemeProvider = ({children}) => {

	return (
		<Provider theme={theme.light}>
			{children}
		</Provider>
	)
}

export default ThemeProvider;
