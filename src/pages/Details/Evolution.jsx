import React from "react";
import PropTypes from "prop-types";
import EvolutionPokemon from "./EvolutionPokemon";
import { useCustomRequest } from "hooks/pokemonQueries";

const generateEvolutionRows = (chain) => {
	const rows = [];

	function generateRow(chainElement, currentRow = []) {
		const { species, evolves_to } = chainElement;
		const newRow = [...currentRow, species.name];

		if (evolves_to.length === 0) {
			rows.push(newRow);
			return;
		}

		for (const nextChain of evolves_to) {
			generateRow(nextChain, newRow);
		}
	}

	generateRow(chain);
	return rows;
};

const Evolution = ({ url }) => {
	const {
		data = {},
		isLoading,
		error,
	} = useCustomRequest(url);

	const { chain = {} } = data;

	if (isLoading) {
		return (
			<div>Loading chain...</div>
		);
	}

	if (error) {
		return (
			<div>Error: {error.message}</div>
		);
	}

	const evolutionRows = generateEvolutionRows(chain);

	return (
		<div>
			<p>Evolution</p>

			{evolutionRows.map((chain) => {
				const key = chain.join('-');

				return (
					<div key={key}>
						{chain.map((pokemon) => (
							<EvolutionPokemon key={pokemon} name={pokemon} />
						))}
					</div>
				);
			})}
		</div>
	);
};

Evolution.propTypes = {
	url: PropTypes.string.isRequired,
};

export default Evolution;
