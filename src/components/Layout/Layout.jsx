import React, { Fragment, useEffect } from "react";
import { useLocation, Outlet } from "react-router-dom";
import Header from "components/Header";
import Content from "components/Content";
import GlobalStyles from "styles/global";

const Layout = () => {
	const { pathname, search } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname, search]);

	return (
		<Fragment>
			<GlobalStyles />
			<Header />

			<Content>
				<Outlet />
			</Content>
		</Fragment>
	);
};

export default Layout;
