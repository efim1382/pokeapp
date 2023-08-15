import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import useSearch from "hooks/useSearch";
import { ReactComponent as SearchLogoMobile } from './svg/search-button-mobile.svg';
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

const FormSearchMobile = (props) => {
	const {
		isSearchExpanded,
		expandSearch,
		collapseSearch,
	} = props;

	const {
		value,
		onChange,
		onSubmit,
	} = useSearch();

	const handleScroll = () => {
		if (isSearchExpanded) {
			collapseSearch();
		}
	};

	useEffect(() => {
		document.addEventListener("scroll", handleScroll);

		return () => {
			document.removeEventListener("scroll", handleScroll);
			collapseSearch();
		};
	}, []);

	return (
		<Fragment>
			{isSearchExpanded ? (
				<Form
					className={isSearchExpanded && "show-search"}
					onSubmit={onSubmit}
				>
					<input
						type="text"
						value={value}
						onChange={onChange}
						placeholder="Use the Advanced Search to explore Pokémon"
					/>

					<Button type="submit">
						<SearchLogoMobile />
					</Button>
				</Form>
			) : (
				<MobileIconContainer onClick={expandSearch}>
					<SearchLogoMobile />
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
