import React, { createContext, useState } from "react";
import PropTypes from "prop-types";
import { ThemeProvider as Provider } from "styled-components";

import {
	defaultTheme,
	keys,
	themesMap,
} from "styles/themes";

const storageKey = "theme";
export const ThemePreferenceContext = createContext({});

const ThemeProvider = ({ children }) => {
	const [currentTheme, setCurrentTheme] = useState(() => {
		return localStorage.getItem(storageKey) || defaultTheme;
	});

	const theme = themesMap[currentTheme] || themesMap[defaultTheme];

	const toggleTheme = () => {
		const newTheme = currentTheme === keys.dark
			? keys.light
			: keys.dark;

		setCurrentTheme(newTheme);
		localStorage.setItem(storageKey, newTheme);
	};

	const value = {
		currentTheme,
		toggleTheme,
	};

	return (
		<ThemePreferenceContext.Provider value={value}>
			<Provider theme={theme}>
				{children}
			</Provider>
		</ThemePreferenceContext.Provider>
	);
};

ThemeProvider.propTypes = {
	children: PropTypes.any.isRequired,
};

export default ThemeProvider;
