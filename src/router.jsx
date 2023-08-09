import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "components/Layout";
import Home from "pages/Home";
import Details from "pages/Details";

const routes = [
	{
		path: "/",
		element: <Layout />,

		children: [
			{
				index: true,
				element: <Home />,
			},

			{
				path: "pokemon/:pokemonName/",
				element: <Details />,
			},
		]
	}
]

export default createBrowserRouter(routes);
