import React, { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { media } from "styles/mixins/media";
import { ReactComponent as SearchLogo } from './search-button.svg';
import { ReactComponent as SearchLogoMobile } from './search-button-mobile.svg';
import { useMedia } from "hooks/useMedia";

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
	const navigate = useNavigate();
	const [searchValue, setSearchValue] = useState("");
	const isMobile = useMedia("(max-width: 480px)");

	const handleSearchChange = (event) => setSearchValue(event.target.value);

	const handleSearchSubmit = (event) => {
		event.preventDefault();

		if (!searchValue) {
			return;
		}

		navigate(`/pokemon/${searchValue}/`);
		setSearchValue("");
	};

	return (
		<Form onSubmit={handleSearchSubmit}>
			<input
				type="text"
				value={searchValue}
				onChange={handleSearchChange}
				placeholder="Use the Advanced Search to explore Pokémon"
			/>

			<Button type="submit">
				{isMobile ? <SearchLogoMobile/> : <SearchLogo/>}
			</Button>
		</Form>
	);
};

SearchForm.propTypes = {
	placeholder: PropTypes.string,
	onClick: PropTypes.func,
};

export default SearchForm;
