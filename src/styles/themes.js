import * as colors from "./variables/colors";

export const keys = {
	light: "light",
	dark: "dark",
};

export const defaultTheme = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
	? keys.dark
	: keys.light;

export const light = {
	header: colors.RED,
	bodyBg: colors.BG_LIGHT,
	link: colors.GREEN,

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
	},
	table: {
		bgFirst: colors.WHITE,
		bgSecond: "#FBFBFB",
		title: colors.BLACK,
		value: "#383838",
	},
	stat: {
		text: "#383838",
		progressBar: colors.RED,
	},
	evoText: colors.GREEN,
	notFound: {
		text: colors.GREEN,
		textSecondary: "#375A62"
	},
};

export const dark = {
	header: colors.DARK,
	bodyBg: colors.BG_DARK,
	link: colors.BLUE,

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
	table: {
		bgFirst: "#383A3F",
		bgSecond: colors.DARK_SECONDARY,
		title: colors.WHITE,
		value: colors.GRAY,
	},
	stat: {
		text: colors.GRAY,
		progressBar: colors.BLUE
	},
	evoText: colors.BLUE,
	notFound: {
		text: colors.BLUE,
		textSecondary: colors.GRAY,
	},
};

export const themesMap = {
	[keys.light]: light,
	[keys.dark]: dark,
};
