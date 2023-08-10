import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import * as content from "styles/variables/content";
import { media } from "styles/mixins/media";

const Container = styled.div`
	width: 100%;
	max-width: ${content.CONTENT_WIDTH_XL + (2 *  content.PADDING_X_XL)}px;
	padding-left: ${content.PADDING_X_XL}px;
	padding-right: ${content.PADDING_X_XL}px;
	padding-top: ${content.PADDING_Y_XL}px;
	padding-bottom: ${content.PADDING_Y_XL}px;
	margin-left: auto;
	margin-right: auto;
	box-sizing: border-box;

	${media("tablet", )} {
		padding-left: ${content.PADDING_X_M}px;
		padding-right: ${content.PADDING_X_M}px;
	}

`;

const Content = ({children}) => (
	<Container>
		{children}
	</Container>
);

Content.propTypes = {
	children: PropTypes.any.isRequired,
}

export default Content;
