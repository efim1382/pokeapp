import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "components/Layout";

const NotFoundPage = lazy(() => import("pages/NotFound"));
const HomePage = lazy(() => import("pages/Home"));
const DetailsPage = lazy(() => import("pages/Details"));

const Router = () => (
	<Routes>
		<Route path="/" element={<Layout />}>
			<Route
				path="*"

				element={
					<Suspense fallback="Loading...">
						<NotFoundPage />
					</Suspense>
				}
			/>

			<Route
				index

				element={
					<Suspense fallback="Loading...">
						<HomePage />
					</Suspense>
				}
			/>

			<Route
				path="/pokemon/:pokemonName/"

				element={
					<Suspense fallback="Loading...">
						<DetailsPage />
					</Suspense>
				}
			/>
		</Route>
	</Routes>
);

export default Router;
