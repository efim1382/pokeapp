import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { Col, Row } from "components/Layout";
import TableRow from "pages/Details/components/TableRow";
import EvolutionPokemon from "pages/Details/components/EvolutionPokemon";
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

const EvolutionRow = ({ url }) => {
	const {
		data = {},
		isLoading,
		error,
	} = useCustomRequest(url);

	const { chain = {} } = data;

	if (isLoading) {
		return null;
	}

	if (error) {
		return (
			<div>Error: {error.message}</div>
		);
	}

	const evolutionRows = generateEvolutionRows(chain);

	return (
		<TableRow title="Evolution">
			<Col $margin="-24px -20px 0">
				{evolutionRows.map((chain) => {
					const key = chain.join('-');

					return (
						<Row
							key={key}
							$flexWrap="nowrap"
							$overflow="auto"
						>
							{chain.map((pokemon) => (
								<Col key={pokemon} $padding="24px 20px 0">
									<NavLink to={`/pokemon/${pokemon}/`}>
										<EvolutionPokemon name={pokemon} />
									</NavLink>
								</Col>
							))}
						</Row>
					);
				})}
			</Col>
		</TableRow>
	);
};

EvolutionRow.propTypes = {
	url: PropTypes.string.isRequired,
};

export default EvolutionRow;
