import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Col, Row } from "components/Layout";
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

const Evolution = ({ url }) => {
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
		<Fragment>
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
								<EvolutionPokemon name={pokemon} />
							</Col>
						))}
					</Row>
				);
			})}
		</Fragment>
	);
};

Evolution.propTypes = {
	url: PropTypes.string.isRequired,
};

export default Evolution;
