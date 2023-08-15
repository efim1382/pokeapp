import styled, { keyframes } from "styled-components";

const gradient = keyframes`
	0% {
		background-position: 100% 0;
	}
	100% {
		background-position: 0;
	}
`;

const CardLoader = styled.div`
	width: 100%;
	height: 100%;
	border-radius: 16px;
	background: ${({theme}) => theme.card.loading};
	background-size: 300%;
	text-decoration: none;
	box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.06);
	animation: 1s ${gradient} infinite;
`;

export default CardLoader;
