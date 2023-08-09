import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Header from "components/Header";

const Layout = () => {
	return (
		<Fragment>
			<Header />
			<Outlet />
		</Fragment>
	);
};

export default Layout;
