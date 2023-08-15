import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { ReactComponent as Arrow } from './svg/arrow.svg';

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
	transition: .15s ease;

	&:hover {
		background-color: ${({theme}) => theme.button.bgHover};

		.arrow-left {
			transform: translateX(-4px);
		}

		.arrow-right {
			transform: rotate(180deg) translateX(-4px);
		}

	}

	.arrow-left {
		display: flex;
		margin-right: 8px;
		transition: .15s ease;
	}

	.arrow-right {
		display: flex;
		margin-left: 8px;
		transform: rotate(180deg);
		transition: .15s ease;
	}
`;

const Button = (props) => {
	const { children, onClick, withLeftArrow, withRightArrow } = props;

	return (
		<StyledButton onClick={onClick}>
			{withLeftArrow && (
				<div className="arrow-left">
					<Arrow />
				</div>
			)}

			{children}

			{withRightArrow && (
				<div className="arrow-right">
					<Arrow />
				</div>
			)}
		</StyledButton>
	);
};

Button.defaultProps = {
	onClick: Function(),
	withLeftArrow: false,
	withRightArrow: false,
};

Button.propTypes = {
	onClick: PropTypes.func,
	children: PropTypes.any.isRequired,
	withLeftArrow: PropTypes.bool,
	withRightArrow: PropTypes.bool,
};

export default Button;
