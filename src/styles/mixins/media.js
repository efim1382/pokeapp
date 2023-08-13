import * as bp from "styles/variables/breakpoint";

export const media = (value) => {
	const bpValue = {
		"desktop": bp.DESKTOP,
		"tablet": bp.TABLET,
		"mobile": bp.MOBILE,
	};

	const breakpoint = bpValue[value] ? bpValue[value] : value;

	return `@media (max-width: ${breakpoint}px)`;
};
