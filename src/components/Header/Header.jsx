import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.div`
	background-color: ${( {theme} ) => theme.header};
	height: 88px;
	padding: 0 56px;
	display: flex;
	align-items: center;
`;

const Header = () => {
	return (
		<HeaderContainer>
			<NavLink to="/">Home</NavLink>

		</HeaderContainer>
	);
};

export default Header;
