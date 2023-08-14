import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { ReactComponent as BubbleIllustration } from './bubble.svg';

const Container = styled.div`
	width: 189px;
`;

const Bubble = ({src, name}) => {

	return (
		<Container
			src={src}
		>
			<BubbleIllustration />
			<div>{name}</div>
		</Container>
	)

};

Bubble.prototype = {
	src: PropTypes.string,
	name: PropTypes.string,
};

export default Bubble;
