import React, { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "components/Layout";

const NotFoundPage = lazy(() => import("pages/NotFound"));
const HomePage = lazy(() => import("pages/Home"));
const DetailsPage = lazy(() => import("pages/Details"));

const routes = [
	{
		path: "/",
		element: <Layout />,

		children: [
			{
				path: "*",

				element: (
					<Suspense fallback="Loading...">
						<NotFoundPage />
					</Suspense>
				),
			},

			{
				index: true,

				element: (
					<Suspense fallback="Loading...">
						<HomePage />
					</Suspense>
				)
			},

			{
				path: "pokemon/:pokemonName/",

				element: (
					<Suspense fallback="Loading...">
						<DetailsPage />
					</Suspense>
				),
			},
		]
	}
];

export default createBrowserRouter(routes);
