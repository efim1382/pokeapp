import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "components/Layout";
import HomeLoading from "pages/Home/components/Loading";
import Loader, { LoaderContainer } from "components/Loader";

const NotFoundPage = lazy(() => import("pages/NotFound"));
const HomePage = lazy(() => import("pages/Home"));
const DetailsPage = lazy(() => import("pages/Details"));

const Loading = () => {
	return (
		<LoaderContainer>
			<Loader />
		</LoaderContainer>
	)
};

const Router = () => (
	<Routes>
		<Route path="/" element={<Layout />}>
			<Route
				path="*"

				element={
					<Suspense fallback={Loading}>
						<NotFoundPage />
					</Suspense>
				}
			/>

			<Route
				index

				element={
					<Suspense fallback={<HomeLoading />}>
						<HomePage />
					</Suspense>
				}
			/>

			<Route
				path="/pokemon/:pokemonName/"

				element={
					<Suspense fallback={Loading}>
						<DetailsPage />
					</Suspense>
				}
			/>
		</Route>
	</Routes>
);

export default Router;
