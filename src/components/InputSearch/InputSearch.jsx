import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { media } from "styles/mixins/media";
import {ReactComponent as SearchLogo} from './search-button.svg';

const InputWrap = styled.div`
	width: 100%;
	max-width: 656px;
	height: 56px;
	border-radius: 64px;
	background: #FFF;
	position: relative;

	${media("mobile")} {
		height: 40px;
	}

	input {
		border: none;
		text-decoration: none;
		width: 100%;
		padding: 8px 56px 8px 24px;
		border-radius: 64px;
		-webkit-appearance: none;
		height: inherit;
		flex: 1 1 1px;
		font-size: inherit;
		outline: none;
		box-sizing: border-box;
		background: 0 0;

	}


`;

const Button = styled.div`
	position: absolute;
	top: 8px;
	right: 8px;
	width: 40px;
	height: 40px;
	cursor: pointer;
	z-index: 1;
`;

const InputSearch = ({placeholder, onClick}) => {
	return (
		<InputWrap>
			<input
				placeholder={placeholder}
			/>
			<Button onClick={onClick}>
				<SearchLogo />
			</Button>

		</InputWrap>
	)
}

InputSearch.propTypes = {
	placeholder: PropTypes.string,
	onClick: PropTypes.func,
}

export default InputSearch
