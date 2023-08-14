import React from "react";
import IconWrapper from "./styled/IconWrapper";
import { useTheme } from "styled-components";

const Weight = () => {
	const theme = useTheme();

	return (
		<IconWrapper>
			<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g id="weight">
					<path
						id="Union"
						fillRule="evenodd"
						clipRule="evenodd"
						d="M15.1518 12.6486C15.1518 13.7773 15.3689 14.8746 15.7806 15.8919H14.7478C13.2115 15.8919 11.886 16.9697 11.5727 18.4737L7.06817 40.0953C7.02284 40.3129 7 40.5345 7 40.7568C7 42.548 8.45205 44 10.2432 44H37.3576C37.5799 44 37.8015 43.9772 38.0191 43.9318C39.7726 43.5665 40.898 41.8488 40.5327 40.0953L36.0282 18.4737C35.7149 16.9697 34.3894 15.8919 32.8531 15.8919H31.8202C32.2319 14.8746 32.4491 13.7773 32.4491 12.6486C32.4491 7.87213 28.5769 4 23.8004 4C19.0239 4 15.1518 7.87213 15.1518 12.6486ZM17.5893 18.0541C18.4631 18.0541 18.9759 17.0712 18.476 16.3545C17.7233 15.2754 17.3139 13.9941 17.3139 12.6486C17.3139 9.06626 20.218 6.16216 23.8004 6.16216C27.3828 6.16216 30.2869 9.06626 30.2869 12.6486C30.2869 13.9941 29.8776 15.2754 29.1249 16.3545C28.625 17.0712 29.1378 18.0541 30.0116 18.0541H32.8531C33.3652 18.0541 33.807 18.4133 33.9115 18.9146L38.416 40.5363C38.5377 41.1208 38.1626 41.6933 37.5781 41.8151C37.5056 41.8302 37.4317 41.8378 37.3576 41.8378H10.2432C9.64618 41.8378 9.16216 41.3538 9.16216 40.7568C9.16216 40.6827 9.16978 40.6088 9.18489 40.5363L13.6894 18.9146C13.7938 18.4133 14.2357 18.0541 14.7478 18.0541H17.5893ZM19.4761 12.6486C19.4761 15.0369 21.4122 16.973 23.8004 16.973C26.1887 16.973 28.1248 15.0369 28.1248 12.6486C28.1248 10.2604 26.1887 8.32432 23.8004 8.32432C21.4122 8.32432 19.4761 10.2604 19.4761 12.6486ZM25.9626 12.6486C25.9626 13.8428 24.9946 14.8108 23.8004 14.8108C22.6063 14.8108 21.6383 13.8428 21.6383 12.6486C21.6383 11.4545 22.6063 10.4865 23.8004 10.4865C24.9946 10.4865 25.9626 11.4545 25.9626 12.6486ZM33 31.5609H29.087V33.4364H30.1631C30.1631 33.8929 30.1359 34.27 30.0815 34.5677C30.0381 34.8554 29.9728 35.0837 29.8859 35.2524C29.7989 35.4111 29.6902 35.5203 29.5598 35.5798C29.4402 35.6394 29.2989 35.6691 29.1359 35.6691C28.9076 35.6691 28.7228 35.6146 28.5815 35.5054C28.4511 35.3963 28.3478 35.2028 28.2717 34.9249C28.2065 34.647 28.1631 34.2749 28.1413 33.8085C28.1196 33.3322 28.1087 32.7368 28.1087 32.0223C28.1087 31.3078 28.1196 30.7174 28.1413 30.251C28.1631 29.7747 28.2065 29.3976 28.2717 29.1198C28.3478 28.8419 28.4565 28.6484 28.5978 28.5392C28.75 28.4301 28.9511 28.3755 29.2011 28.3755C29.5598 28.3755 29.7935 28.5293 29.9022 28.8369C30.0109 29.0949 30.0652 29.5068 30.0652 30.0724H33C33 29.4274 32.9076 28.8816 32.7228 28.435C32.5381 27.9786 32.2826 27.6064 31.9565 27.3187C31.6304 27.0309 31.2391 26.8225 30.7826 26.6935C30.337 26.5645 29.8478 26.5 29.3152 26.5C28.4239 26.5 27.6957 26.624 27.1304 26.8721C26.5652 27.1103 26.1196 27.4626 25.7935 27.929C25.4783 28.3954 25.2609 28.9709 25.1413 29.6556C25.0326 30.3403 24.9783 31.1292 24.9783 32.0223C24.9783 32.9055 25.0054 33.6894 25.0598 34.3742C25.125 35.0589 25.2717 35.6344 25.5 36.1008C25.7283 36.5672 26.0652 36.9195 26.5109 37.1576C26.9565 37.3859 27.5652 37.5 28.337 37.5C28.5978 37.5 28.8533 37.4851 29.1033 37.4553C29.3641 37.4256 29.6033 37.376 29.8207 37.3065C30.0489 37.2271 30.25 37.113 30.4239 36.9641C30.6087 36.8153 30.75 36.6267 30.8478 36.3985H30.8805L30.9457 37.3363H33V31.5609ZM18.0326 26.7084H15V37.3363H18.0326V34.523L18.6685 33.6299L20.4457 37.3363H23.9022L20.6087 31.3525L23.5435 26.7084H20.3153L18.0653 30.7869H18.0326V26.7084Z"
						fill={theme.card.statIcon}
					/>
				</g>
			</svg>
		</IconWrapper>
	);
};

export default Weight;
