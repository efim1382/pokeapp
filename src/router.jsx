import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout, {Row} from "components/Layout";
import * as L from "./components/Loader";

const Loader = () => (
	<Row
		$minWidth="100%"
		$minHeight="80vh"
		$justifyContent="center"
		$alignItems="center"
	>
		<L />
	</Row>
);

const NotFoundPage = lazy(() => import("pages/NotFound"));
const HomePage = lazy(() => import("pages/Home"));
const DetailsPage = lazy(() => import("pages/Details"));

const Router = () => (
	<Routes>
		<Route path="/" element={<Layout />}>
			<Route
				path="*"

				element={
					<Suspense fallback={Loader}>
						<NotFoundPage />
					</Suspense>
				}
			/>

			<Route
				index

				element={
					<Suspense fallback={Loader}>
						<HomePage />
					</Suspense>
				}
			/>

			<Route
				path="/pokemon/:pokemonName/"

				element={
					<Suspense fallback={Loader}>
						<DetailsPage />
					</Suspense>
				}
			/>
		</Route>
	</Routes>
);

export default Router;
