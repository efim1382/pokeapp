import React from "react";
import { useParams, NavLink } from "react-router-dom";
import NotFound from "pages/NotFound";
import { Row, Col } from "components/Layout";
import Button, { Container as PaginationContainer } from "components/Button";
import CardDetails from "./CardDetails";
import Evolution from "./Evolution";
import TableRow from "./components/TableRow";
import { usePokemonDetails } from "hooks/pokemonQueries";
import { getDescription, getBeautifiedId } from "helpers/pokemonHelpers";
import styled from "styled-components";
import { media } from "styles/mixins/media";
import { media } from "styles/mixins/media";
import Loader from "components/Loader";

const maxCaptureRate = 255;

const CardDetailsWrapper = styled(Col)`
	width: 100%;
	max-width: 342px;
	min-width: 288px;
	margin: 0 16px 0 0;

	${media(768)} {
		margin: 0 0 16px 0;
		max-width: 100%;
	}
`;

const TableWrap = styled(Col)`
	flex: 1 1 .01%;
	width: auto;
	overflow: hidden;
	border-radius: 16px;
`;

const LinksRow = styled(PaginationContainer)`
	justify-content: center;
	padding-top: 16px;
	min-width: 100%;
	width: auto;

	${media(768)} {
		order: -1;
		padding-top: 0;
		padding-bottom: 16px;
	}

	button {
		flex: 1 1 auto;
		margin:  0 8px;
	}
`;

const Link = styled(NavLink)`
	text-decoration: none;
`;

const Details = () => {
	const { pokemonName } = useParams();

	const {
		data = {},
		isLoading,
		error,
	} = usePokemonDetails(pokemonName);

	if (isLoading) {
		return (
			<Row
				$minWidth="100%"
				$minHeight="80vh"
				$justifyContent="center"
				$alignItems="center"
			>
				<Loader />
			</Row>
		);
	}

	if (error) {
		if (error.code === 404) {
			return (
				<NotFound />
			);
		}

		return <div>Error: {error.message}</div>;
	}

	const { details, species } = data;

	const {
		id,
		abilities = [],
	} = details;

	const {
		varieties,
		capture_rate,
		evolution_chain = {},
		egg_groups = [],
		flavor_text_entries = [],
	} = species;

	const previousPokemonId = id - 1;
	const formattedPreviousPokemonId = getBeautifiedId(previousPokemonId);
	const nextPokemonId = id + 1;
	const formattedNextPokemonId = getBeautifiedId(nextPokemonId);
	const isPreviousPokemonExist = previousPokemonId > 0;
	const description = getDescription(flavor_text_entries);
	const catchRate = ((capture_rate * 100) / maxCaptureRate).toFixed(1);

	return (
		<Row>
			<CardDetailsWrapper>
				<Row>
					<CardDetails {...details} />

					<LinksRow>
						{isPreviousPokemonExist && (
							<Button withLeftArrow>
								<Link to={`/pokemon/${previousPokemonId}/`}>
									Back #{formattedPreviousPokemonId}
								</Link>
							</Button>
						)}

						<Button withRightArrow>
							<Link to={`/pokemon/${nextPokemonId}/`}>
								Next #{formattedNextPokemonId}
							</Link>
						</Button>
					</LinksRow>
				</Row>
			</CardDetailsWrapper>

			<TableWrap>
				<TableRow title="Versions">
					<Row
						$margin="0 -16px"
					>
						{varieties.map((version) => (
							<Col $padding="0 16px" key={version.pokemon.name}>
								<NavLink to={`/pokemon/${version.pokemon.name}`}>
									{version.pokemon.name}
								</NavLink>
							</Col>
						))}
					</Row>
				</TableRow>

				<TableRow title="Story">
					{description}
				</TableRow>

				<TableRow title="Abilities">
					<Row $margin="0 -4px">
						{abilities.map((item) => (
							<Col
								$padding="0 4px"
								key={item.ability.name}
								data-testid="ability"
							>
								{item.ability.name}
							</Col>
						))}
					</Row>
				</TableRow>

				<TableRow title="Catch rate">
					{catchRate}%
				</TableRow>

				<TableRow title="Egg group">
					<Row $margin="0 -4px">
						{egg_groups.map((item) => (
							<Col $padding="0 4px" key={item.name}>
								{item.name}
							</Col>
						))}
					</Row>
				</TableRow>

				<TableRow title="Evolution">
					<Col $margin="-24px -20px 0">
						{evolution_chain.url && (
							<Evolution url={evolution_chain.url} />
						)}
					</Col>
				</TableRow>
			</TableWrap>
		</Row>
	);
};

export default Details;
