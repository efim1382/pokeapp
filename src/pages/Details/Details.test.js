import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Details from "pages/Details/index";
import "@testing-library/jest-dom/extend-expect";
import mockMatchMedia from "__mocks__/matchMedia";
import { pokemonMock, speciesMock } from "api/mocks";

const queryClient = new QueryClient();

beforeAll(() => {
	queryClient.setQueryData(["pokemon", "pikachu"], pokemonMock);
	queryClient.setQueryData(["pokemon-species", "pikachu"], speciesMock);
});

describe("Details page", () => {
	mockMatchMedia();

	it("renders weight correctly", () => {
		render(
			<QueryClientProvider client={queryClient}>
				<MemoryRouter initialEntries={['/pokemon/pikachu']}>
					<Routes>
						<Route path="/pokemon/:pokemonName" element={<Details />} />
					</Routes>
				</MemoryRouter>
			</QueryClientProvider>,
		);

		const weightElement = screen.getByTestId("pokemon-weight");
		expect(weightElement).toHaveTextContent(`Weight: ${pokemonMock.weight}`);
	});
});
