import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "components/Layout";
import { Loader as HomeLoader } from "pages/Home";
import Loader, { LoaderContainer } from "components/Loader";

const NotFoundPage = lazy(() => import("pages/NotFound"));
const HomePage = lazy(() => import("pages/Home"));
const DetailsPage = lazy(() => import("pages/Details"));

const GlobalLoading = () => {
	return (
		<LoaderContainer>
			<Loader />
		</LoaderContainer>
	);
};

const Router = () => (
	<Routes>
		<Route path="/" element={<Layout />}>
			<Route
				path="*"

				element={
					<Suspense fallback={<GlobalLoading />}>
						<NotFoundPage />
					</Suspense>
				}
			/>

			<Route
				index

				element={
					<Suspense fallback={<HomeLoader />}>
						<HomePage />
					</Suspense>
				}
			/>

			<Route
				path="/pokemon/:pokemonName/"

				element={
					<Suspense fallback={<GlobalLoading />}>
						<DetailsPage />
					</Suspense>
				}
			/>
		</Route>
	</Routes>
);

export default Router;
