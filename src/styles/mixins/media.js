import * as bp from "../variables/breakpoint";

export const media = (value) => {
	const bpValue = {
		"desktop": bp.DESKTOP,
		"tablet": bp.TABLET,
		"mobile": bp.MOBILE,
	}
	return `@media (max-width: ${bpValue[value]}px)`
};
