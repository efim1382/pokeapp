import * as colors from "./variables/colors";

export const keys = {
	light: "light",
	dark: "dark",
};

export const defaultTheme = keys.light;

export const light = {
	header: colors.RED,
	bodyBg: colors.BG_LIGHT,

	card: {
		bg: colors.WHITE,
		title: colors.GREEN,
		desc: colors.GRAY,
		stat: colors.DARK,
		statIcon: colors.RED,
		loading: "linear-gradient( 270deg, #F1F1F1 30%, #fff 50%, #F1F1F1 70%)"
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
};

export const dark = {
	header: colors.DARK,
	bodyBg: colors.BG_DARK,

	card: {
		bg: colors.DARK,
		title: colors.BLUE,
		desc: colors.GRAY,
		stat: colors.BLUE,
		statIcon: colors.BLUE,
		loading: "linear-gradient( 270deg, #333 30%, #5C5E61 50%, #333 70%)",
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
	},
};

export const themesMap = {
	[keys.light]: light,
	[keys.dark]: dark,
};
