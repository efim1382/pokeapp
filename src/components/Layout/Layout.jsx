import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Header from "components/Header";
import Content from "components/Content";
import GlobalStyles from "styles/global";

const Layout = () => {
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
