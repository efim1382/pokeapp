import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import ThemeProvider from "store/ThemeProvider";
import Home from "pages/Home/index";
import "@testing-library/jest-dom/extend-expect";
import { pokemonMock, pokemonListMock } from "api/mocks";

const queryClient = new QueryClient();

beforeAll(() => {
	queryClient.setQueryData(["pokemon", "pikachu"], pokemonMock);
	queryClient.setQueryData(["pokemon-list", 0], pokemonListMock);
});

describe("Home page", () => {
	it("renders cards", async () => {
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
	});

	it("renders card data correctly", async () => {
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
			const weightElement = screen.getAllByTestId("pokemon-card-weight")[0];
			expect(weightElement).toHaveTextContent(pokemonMock.weight);
		});
	});
});
