import React from "react";
import { Outlet } from "react-router-dom";
import GlobalStyles from "../../styles/global/Global"
import Header from "components/Header";
import ThemeProvider from "components/ThemeProvider";
import Content from "../Content";

const Layout = () => {
	return (
		<ThemeProvider>
			<GlobalStyles/>
			<Header />
			<Content>
				<Outlet />
			</Content>

		</ThemeProvider>
	);
};

export default Layout;
