import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "components/Layout";
import Home from "pages/Home";

const routes = [
	{
		path: "/",
		element: <Layout />,

		children: [
			{
				index: true,
				element: <Home />,
			},
		]
	}
]

export default createBrowserRouter(routes);
