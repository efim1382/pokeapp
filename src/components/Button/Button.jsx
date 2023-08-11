import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledButton = styled.button`
	display: flex;
	padding: 8px 16px;
	align-items: center;
	justify-content: center;
	border-radius: 4px;
	background-color: ${({theme}) => theme.button.bg};
	color: ${({theme}) => theme.button.text};
	fill: currentColor;
	box-sizing: border-box;
	text-decoration: none !important;
	outline: none;
	-webkit-appearance: none;
	border: none;
	cursor: pointer;
	position: relative;
	overflow: hidden;
`;

const Button = ({ children, onClick }) => {
	return (
		<StyledButton onClick={onClick}>
			{children}
		</StyledButton>
	);
};

Button.defaultProps = {
	onClick: Function(),
};

Button.propTypes = {
	onClick: PropTypes.func,
	children: PropTypes.any.isRequired,
};

export default Button;
