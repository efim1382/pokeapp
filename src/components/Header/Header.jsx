import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import InputSearch from "components/InputSearch";
import ThemeToggle from "components/ThemeToggle";
import {ReactComponent as Logo} from './logo.svg';

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
`

const Header = () => {
	return (
		<HeaderContainer>
			<NavLink
				to="/"
			>
				<StyledLogo />
			</NavLink>

			<InputSearch
				placeholder="Use the Advanced Search to explore Pokémon"
			/>

			<ThemeToggle />

		</HeaderContainer>
	);
};

export default Header;
