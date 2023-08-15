import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { ReactComponent as SearchLogoMobile } from './search-button-mobile.svg';
import styled from "styled-components";

const Form = styled.form`
	width: 100%;
	max-width: 656px;
	height: 40px;
	border-radius: 64px;
	background: #FFF;
	position: relative;
	margin-left: 0;

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
	top: 4px;
	right: 8px;
	width: 32px;
	height: 32px;
	cursor: pointer;
	z-index: 1;
	border-radius: 50%;
`;

const MobileIconContainer = styled.div`
	width: 32px;
	height: 32px;
	min-width: 32px;
`;

const FormSearchMobile = ({ isSearchExpanded, expandSearch, collapseSearch }) => {
	const navigate = useNavigate();
	const [searchValue, setSearchValue] = useState("");

	const handleSearchChange = (event) => setSearchValue(event.target.value);

	const handleSearchSubmit = (event) => {
		event.preventDefault();

		if (!searchValue) {
			return;
		}

		navigate(`/pokemon/${searchValue}/`);
		setSearchValue("");
	};

	const handleScroll = () => {
		if (isSearchExpanded) {
			collapseSearch();
		}
	};

	useEffect(() => {
		document.addEventListener("scroll", handleScroll);

		return () => {
			document.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<Fragment>
			{isSearchExpanded ? (
				<Form
					className={isSearchExpanded && "show-search"}
					onSubmit={handleSearchSubmit}
				>
					<input
						type="text"
						value={searchValue}
						onChange={handleSearchChange}
						placeholder="Use the Advanced Search to explore Pokémon"
					/>

					<Button type="submit">
						<SearchLogoMobile />
					</Button>
				</Form>
			) : (
				<MobileIconContainer onClick={expandSearch}>
					<SearchLogoMobile/>
				</MobileIconContainer>
			)}
		</Fragment>
	);
};

FormSearchMobile.defaultProps = {
	isSearchExpanded: false,
	expandSearch: Function(),
	collapseSearch: Function(),
};

FormSearchMobile.propTypes = {
	isSearchExpanded: PropTypes.bool,
	expandSearch: PropTypes.func,
	collapseSearch: PropTypes.func,
};

export default FormSearchMobile;
