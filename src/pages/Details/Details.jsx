import React from "react";
import { useParams, NavLink } from "react-router-dom";
import NotFound from "pages/NotFound";
import { Row, Col } from "components/Layout";
import Button, { Container as PaginationContainer } from "components/Button";
import CardDetails from "./CardDetails";
import EvolutionRow from "./EvolutionRow";
import TableRow from "./components/TableRow";
import Loader, { LoaderContainer } from "components/Loader";
import { usePokemonDetails } from "hooks/pokemonQueries";
import { getDescription, getBeautifiedId } from "helpers/pokemonHelpers";
import styled from "styled-components";
import { media } from "styles/mixins/media";

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
	box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.06);
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

	a {
		flex: 1 1 auto;
		margin:  0 8px;

		button {
			margin: 0;
			width: 100%;
		}
	}
`;

const Link = styled(NavLink)`
	text-decoration: none;
`;

const VersionLink = styled(NavLink)`
	text-transform: capitalize;

	&:hover {
		text-decoration: none;
	}
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
			<LoaderContainer>
				<Loader />
			</LoaderContainer>
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
	const filteredVisibleAbilities = abilities.filter((item) => !item.is_hidden);

	return (
		<Row
			$alignItems="flex-start"
		>
			<CardDetailsWrapper>
				<Row>
					<CardDetails {...details} />

					<LinksRow>
						{isPreviousPokemonExist && (
							<Link to={`/pokemon/${previousPokemonId}/`}>
								<Button withLeftArrow>
									Back #{formattedPreviousPokemonId}
								</Button>
							</Link>
						)}

						<Link to={`/pokemon/${nextPokemonId}/`}>
							<Button withRightArrow>
								Next #{formattedNextPokemonId}
							</Button>
						</Link>
					</LinksRow>
				</Row>
			</CardDetailsWrapper>

			<TableWrap>
				<TableRow title="Versions">
					<Row
						$margin="0 -16px"
						$width="auto"
					>
						{varieties.map((version) => (
							<Col $padding="0 16px" key={version.pokemon.name}>
								<VersionLink to={`/pokemon/${version.pokemon.name}/`}>
									{version.pokemon.name}
								</VersionLink>
							</Col>
						))}
					</Row>
				</TableRow>

				<TableRow title="Story">
					{description}
				</TableRow>

				<TableRow title="Abilities">
					<Row
						$margin="0 -4px"
						$width="auto"
					>
						{filteredVisibleAbilities.map((item) => (
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
					<Row
						$margin="0 -4px"
						$width="auto"
					>
						{egg_groups.map((item) => (
							<Col $padding="0 4px" key={item.name}>
								{item.name}
							</Col>
						))}
					</Row>
				</TableRow>

				{evolution_chain.url && (
					<EvolutionRow url={evolution_chain.url} />
				)}
			</TableWrap>
		</Row>
	);
};

export default Details;
