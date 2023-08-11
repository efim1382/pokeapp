import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import FormSearch from "./FormSearch";
import ThemeSwitcher from "./ThemeSwitcher";
import { ReactComponent as Logo } from './logo.svg';

const HeaderContainer = styled.div`
	background-color: ${( {theme} ) => theme.header};
	height: 88px;
	padding: 0 56px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const StyledLogo = styled(Logo)`
	width: 100%;
	max-width: 150px;
`;

const Header = () => {
	return (
		<HeaderContainer>
			<NavLink to="/">
				<StyledLogo />
			</NavLink>

			<FormSearch />
			<ThemeSwitcher />
		</HeaderContainer>
	);
};

export default Header;
