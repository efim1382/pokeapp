import React from "react";
import useSearch from "hooks/useSearch";
import styled from "styled-components";
import { media } from "styles/mixins/media";
import { ReactComponent as SearchLogo } from './svg/search-button.svg';

const Form = styled.form`
	width: 100%;
	max-width: 656px;
	height: 56px;
	border-radius: 64px;
	background: #FFF;
	position: relative;
	margin-left: 16px;

	${media("tablet")} {
		margin-left: 8px;
	}

	${media("mobile")} {
		height: 40px;
	}

	input {
		border: none;
		text-decoration: none;
		width: 100%;
		padding: 8px 56px 8px 24px;
		-webkit-appearance: none;
		height: inherit;
		flex: 1 1 1px;
		font-size: inherit;
		outline: none;
		box-sizing: border-box;
		background: 0 0;
	}
`;

const Button = styled.button`
	box-sizing: border-box;
	text-decoration: none !important;
	outline: none;
	-webkit-appearance: none;
	border: none;
	position: absolute;
	top: 8px;
	right: 8px;
	width: 40px;
	height: 40px;
	cursor: pointer;
	z-index: 1;
	border-radius: 50%;

	${media("mobile")} {
		width: 32px;
		height: 32px;
		top: 4px;
	}
`;

const SearchForm = () => {
	const {
		value,
		onChange,
		onSubmit,
	} = useSearch();

	return (
		<Form onSubmit={onSubmit}>
			<input
				type="text"
				value={value}
				onChange={onChange}
				placeholder="Use the Advanced Search to explore Pokémon"
			/>

			<Button type="submit">
				<SearchLogo />
			</Button>
		</Form>
	);
};

export default SearchForm;
