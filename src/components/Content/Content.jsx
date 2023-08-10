import styled from "styled-components";
import * as content from "../../styles/variables/content";
import { media } from "../../styles/mixins/media";

const Content = styled.div`
	width: 100%;
	max-width: ${content.CONTENT_WIDTH_XL + (2 *  content.PADDING_X_XL)}px;
	padding-left: ${content.PADDING_X_XL}px;
	padding-right: ${content.PADDING_X_XL}px;
	padding-top: ${content.PADDING_Y_XL}px;
	margin-left: auto;
	margin-right: auto;
	box-sizing: border-box;
	background-color: ${({theme}) => theme.bodyBg};

	${media("tablet", )} {
		padding-left: ${content.PADDING_X_M}px;
		padding-right: ${content.PADDING_X_M}px;
	}

`;

export default Content;
