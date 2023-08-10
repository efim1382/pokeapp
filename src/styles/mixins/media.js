import * as bp from "../variables/breakpoint";

export const media = (value) => {
	const bpValue = {
		"desktop": bp.DESKTOP,
		"tablet": bp.DESKTOP,
		"mobile": bp.DESKTOP,
	}
	return `@media (max-width: ${bpValue[value]}px)`
};
