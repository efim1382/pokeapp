import React from "react";
import IconWrapper from "./styled/IconWrapper";
import { useTheme } from "styled-components";

const Height = () => {
	const theme = useTheme();

	return (
		<IconWrapper>
			<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M13.25 7.75C13.9344 7.75 14.4903 8.3 14.4999 8.98211L21.1339 15.6161C21.622 16.1043 21.622 16.8957 21.1339 17.3839C20.6457 17.872 19.8543 17.872 19.3661 17.3839L14.5 12.5178L14.5 37.4822L19.3661 32.6161C19.8543 32.128 20.6457 32.128 21.1339 32.6161C21.622 33.1043 21.622 33.8957 21.1339 34.3839L14.1339 41.3839C13.6457 41.872 12.8543 41.872 12.3661 41.3839L5.36612 34.3839C4.87796 33.8957 4.87796 33.1043 5.36612 32.6161C5.85427 32.128 6.64573 32.128 7.13388 32.6161L12 37.4822L12 12.5178L7.13388 17.3839C6.64573 17.872 5.85427 17.872 5.36612 17.3839C4.87796 16.8957 4.87796 16.1043 5.36612 15.6161L12.0001 8.98211C12.0097 8.3 12.5656 7.75 13.25 7.75ZM26 12C26 11.3096 26.5596 10.75 27.25 10.75H41.25C41.9404 10.75 42.5 11.3096 42.5 12C42.5 12.6904 41.9404 13.25 41.25 13.25H27.25C26.5596 13.25 26 12.6904 26 12ZM26 20C26 19.3096 26.5596 18.75 27.25 18.75H41.25C41.9404 18.75 42.5 19.3096 42.5 20C42.5 20.6904 41.9404 21.25 41.25 21.25H27.25C26.5596 21.25 26 20.6904 26 20ZM27.25 27.75C26.5596 27.75 26 28.3096 26 29C26 29.6904 26.5596 30.25 27.25 30.25H41.25C41.9404 30.25 42.5 29.6904 42.5 29C42.5 28.3096 41.9404 27.75 41.25 27.75H27.25ZM26 37C26 36.3096 26.5596 35.75 27.25 35.75H41.25C41.9404 35.75 42.5 36.3096 42.5 37C42.5 37.6904 41.9404 38.25 41.25 38.25H27.25C26.5596 38.25 26 37.6904 26 37Z"
					fill={theme.card.statIcon}
				/>
			</svg>
		</IconWrapper>
	);
};

export default Height;