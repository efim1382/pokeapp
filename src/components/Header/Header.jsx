import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import FormSearch from "./FormSearch";
import FormSearchMobile from "./FormSearchMobile";
import ThemeSwitcher from "./ThemeSwitcher";
import { ReactComponent as Logo } from './svg/logo.svg';
import { media } from "styles/mixins/media";
import { useMedia } from "hooks/useMedia";

const HeaderContainer = styled.div`
	background-color: ${( {theme} ) => theme.header};
	height: 88px;
	padding: 0 56px;
	display: flex;
	align-items: center;
	justify-content: space-between;

	${media("tablet")} {
		padding: 0 16px;
	}
`;

const Link = styled(NavLink)`
	${media("mobile")} {
		width: 100%;
	}
`;

const StyledLogo = styled(Logo)`
	width: 100%;
	max-width: 150px;
	min-width: 87px;
`;

const Header = () => {
	const [isSearchExpanded, setIsSearchExpanded] = useState(false);
	const isMobile = useMedia("(max-width: 480px)");

	const expandMobileSearch = () => setIsSearchExpanded(true);
	const collapseMobileSearch = () => setIsSearchExpanded(false);

	return (
		<HeaderContainer>
			{!isSearchExpanded && (
				<Link to="/">
					<StyledLogo />
				</Link>
			)}

			{!isMobile && (
				<FormSearch />
			)}

			{isMobile && (
				<FormSearchMobile
					isSearchExpanded={isSearchExpanded}
					expandSearch={expandMobileSearch}
					collapseSearch={collapseMobileSearch}
				/>
			)}

			<ThemeSwitcher />
		</HeaderContainer>
	);
};

export default Header;
