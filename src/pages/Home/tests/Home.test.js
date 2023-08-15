import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import ThemeProvider from "store/ThemeProvider";
import Home from "pages/Home/index";
import "@testing-library/jest-dom/extend-expect";
import mockWindowMethods from "__mocks__/window";
import { pokemonMock, pokemonListMock } from "api/mocks";

const queryClient = new QueryClient();

beforeAll(() => {
	queryClient.setQueryData(["pokemon", "bulbasaur"], pokemonMock);
	queryClient.setQueryData(["pokemon-list", 0], pokemonListMock);
});

describe("Home page", () => {
	it("renders main data correctly", async () => {
		mockWindowMethods();

		render(
			<QueryClientProvider client={queryClient}>
				<ThemeProvider>
					<MemoryRouter>
						<Routes>
							<Route index element={<Home />} />
						</Routes>
					</MemoryRouter>
				</ThemeProvider>
			</QueryClientProvider>
		);

		await waitFor(() => {
			const components = screen.getAllByTestId("pokemon-card");
			expect(components).toHaveLength(pokemonListMock.results.length);
		});

		const illustration = screen.getAllByTestId("illustration")[0];
		expect(illustration).toBeInTheDocument();

		const pokemonName = screen.getAllByTestId("pokemon-name")[0];
		expect(pokemonName).toHaveTextContent(pokemonMock.name);
	});
});
