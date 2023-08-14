import React from "react";
import styled, { useTheme, keyframes } from "styled-components";

const animation = keyframes`
	from {
		transform: none
	}
	20% {
		transform: translate3d(-15%,0,0) rotate3d(0,0,1,-10deg)
	}
	40% {
		transform: translate3d(15%,0,0) rotate3d(0,0,1,5deg)
	}
	60% {
		transform: translate3d(-7%,0,0) rotate3d(0,0,1,-10deg)
	}
	to {
		transform: none
	}
`;

const Container = styled.div`
	width: 120px;
	height: 120px;

	svg {
		width: 100%;
		height: 100%;
		animation-name: ${animation};
		animation-duration: 1.25s;
		animation-fill-mode: both;
		animation-iteration-count: infinite;
	}

`;

const Loader = () => {
	const theme = useTheme();

	return (
		<Container>
			<svg
				width="42"
				height="42"
				viewBox="0 0 42 42"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g filter={theme.toggle.filter}>
					<ellipse
						cx="21.014"
						cy="19.98"
						rx="18.6978"
						ry="18.6978"
						fill={theme.toggle.line}
					/>

					<g filter="url(#filter1_i_38_3663)">
						<path
							d="M40.8767 22.2094C39.7618 32.2179 31.2734 40 20.9675 40C10.6573 40 2.16612 32.2106 1.05681 22.1962C1.00578 21.7355 1.37394 21.3424 1.83742 21.3425L40.0967 21.3553C40.5601 21.3555 40.928 21.7488 40.8767 22.2094Z"
							fill="#F8F8F8"
						/>
					</g>

					<path
						d="M20.9675 39.5998C31.0673 39.5998 39.3864 31.9732 40.479 22.1651C40.5027 21.9527 40.3329 21.7556 40.0965 21.7555L1.83728 21.7427C1.60097 21.7426 1.43103 21.9397 1.45457 22.1521C2.54167 31.9661 10.8635 39.5998 20.9675 39.5998Z"
						stroke="#252525"
						strokeWidth="0.800387"
					/>

					<g filter="url(#filter2_i_38_3663)">
						<path
							d="M40.9232 17.7906C39.8083 7.78212 31.3199 0 21.014 0C10.7038 0 2.21263 7.78936 1.10331 17.8038C1.05229 18.2645 1.42045 18.6576 1.88393 18.6575L40.1432 18.6447C40.6067 18.6445 40.9745 18.2512 40.9232 17.7906Z"
							fill={theme.toggle.topColor}
						/>
					</g>

					<path
						d="M21.014 0.400194C31.1138 0.400194 39.4329 8.02678 40.5255 17.8349C40.5492 18.0473 40.3794 18.2444 40.1431 18.2445L1.88379 18.2573C1.64748 18.2574 1.47754 18.0603 1.50108 17.8479C2.58818 8.03387 10.91 0.400194 21.014 0.400194Z"
						stroke="#252525"
						strokeWidth="0.800387"
					/>

					<ellipse
						cx="21.014"
						cy="19.98"
						rx="7.34557"
						ry="7.34557"
						fill={theme.toggle.circle}
					/>

					<ellipse
						cx="21.0141"
						cy="19.98"
						rx="4.67446"
						ry="4.67446"
						fill="#F8F8F8"
					/>

					<g filter="url(#filter3_d_38_3663)">
						<ellipse cx="21.0141" cy="19.98" rx="3.3389" ry="3.3389" fill="#F8F8F8"/>

						<path
							d="M23.9528 19.98C23.9528 21.603 22.6371 22.9187 21.0141 22.9187C19.3911 22.9187 18.0754 21.603 18.0754 19.98C18.0754 18.357 19.3911 17.0413 21.0141 17.0413C22.6371 17.0413 23.9528 18.357 23.9528 19.98Z"
							stroke="#252525"
							strokeWidth="0.800387"
						/>
					</g>
				</g>

				<defs>
					<filter
						id="filter0_d_38_3663"
						x="1.05212"
						y="0"
						width="40.8763"
						height="42.001"
						filterUnits="userSpaceOnUse"
						colorInterpolationFilters="sRGB"
					>
						<feFlood floodOpacity="0" result="BackgroundImageFix"/>
						<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
						<feOffset dx="1.00048" dy="2.00097"/>
						<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
						<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_38_3663"/>
						<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_38_3663" result="shape"/>
					</filter>

					<filter
						id="filter1_i_38_3663"
						x="1.05212"
						y="21.3425"
						width="39.8293"
						height="18.6575"
						filterUnits="userSpaceOnUse"
						colorInterpolationFilters="sRGB"
					>
						<feFlood floodOpacity="0" result="BackgroundImageFix"/>
						<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
						<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
						<feOffset dx="-6.0029" dy="-2.00097"/>
						<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
						<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
						<feBlend mode="normal" in2="shape" result="effect1_innerShadow_38_3663"/>
					</filter>

					<filter
						id="filter2_i_38_3663"
						x="1.09863"
						y="0"
						width="39.8293"
						height="18.6575"
						filterUnits="userSpaceOnUse"
						colorInterpolationFilters="sRGB"
					>
						<feFlood floodOpacity="0" result="BackgroundImageFix"/>
						<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
						<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
						<feOffset dx="-6.0029" dy="-1.00048"/>
						<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
						<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
						<feBlend mode="normal" in2="shape" result="effect1_innerShadow_38_3663"/>
					</filter>

					<filter
						id="filter3_d_38_3663"
						x="17.6752"
						y="16.6411"
						width="7.07793"
						height="7.07799"
						filterUnits="userSpaceOnUse"
						colorInterpolationFilters="sRGB"
					>
						<feFlood floodOpacity="0" result="BackgroundImageFix"/>
						<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
						<feOffset dx="0.400194" dy="0.400194"/>
						<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
						<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_38_3663"/>
						<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_38_3663" result="shape"/>
					</filter>
				</defs>
			</svg>
		</Container>
	);
};

export default Loader;
