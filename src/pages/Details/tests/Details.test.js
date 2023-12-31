import React from "react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Details from "pages/Details/index";
import ThemeProvider from "store/ThemeProvider";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { mockMatchMedia } from "__mocks__/window";
import { pokemonMock, speciesMock } from "api/mocks";

const queryClient = new QueryClient();

beforeAll(() => {
	queryClient.setQueryData(["pokemon", "bulbasaur"], pokemonMock);
	queryClient.setQueryData(["pokemon-species", "bulbasaur"], speciesMock);
});

describe("Details page", () => {
	mockMatchMedia();

	it("renders weight correctly", async () => {
		render(
			<QueryClientProvider client={queryClient}>
				<ThemeProvider>
					<MemoryRouter initialEntries={['/pokemon/bulbasaur']}>
						<Routes>
							<Route path="/pokemon/:pokemonName" element={<Details />} />
						</Routes>
					</MemoryRouter>
				</ThemeProvider>
			</QueryClientProvider>,
		);

		await waitFor(() => {
			const nameElement = screen.getByTestId("pokemon-name");
			expect(nameElement).toHaveTextContent(pokemonMock.name);
		});

		const heightElement = screen.getByTestId("pokemon-height");
		expect(heightElement).toHaveTextContent(pokemonMock.height);

		const weightElement = screen.getByTestId("pokemon-weight");
		expect(weightElement).toHaveTextContent(pokemonMock.weight);

		const abilities = screen.getAllByTestId("ability");
		expect(abilities).toHaveLength(pokemonMock.abilities.length);

		abilities.forEach((abilityElement, index) => {
			expect(abilityElement).toHaveTextContent(pokemonMock.abilities[index].ability.name);
		});
	});
});
