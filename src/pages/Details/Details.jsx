import React from "react";
import { useParams, NavLink } from "react-router-dom";
import NotFound from "pages/NotFound";
import Evolution from "./Evolution";
import { usePokemonDetails } from "hooks/pokemonQueries";
import { getDescription } from "helpers/pokemonHelpers";
import CardDetails from "components/CardDetails";
import { Row, Col } from "components/Layout";
import Button from "components/Button";
import { Container as PaginationContainer } from "components/Button";
import TableRow from "components/Table";
import styled from "styled-components";
import { media } from "../../styles/mixins/media";
import Bubble from "../../components/Bubble";

const maxCaptureRate = 255;

const LinksRow = styled(PaginationContainer)`
	justify-content: space-around;
	padding-top: 16px;

	${media("mobile")} {
		order: 0;
		padding-top: 0;
		padding-bottom: 16px;
	}

	button {
		flex: 1 1 auto;
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
		return <div>Loading...</div>;
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
		name,
		height,
		weight,
		sprites = {},
		types = [],
		stats = [],
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
	const formattedPreviousPokemonId = String(previousPokemonId).padStart(4, 0);
	const nextPokemonId = id + 1;
	const formattedNextPokemonId = String(nextPokemonId).padStart(4, 0);
	const isPreviousPokemonExist = previousPokemonId > 0;
	const description = getDescription(flavor_text_entries);
	const catchRate = ((capture_rate * 100) / maxCaptureRate).toFixed(1);
	const pokemonId = String(id).padStart(4, 0);

	return (
		<Row>
			<Col
				$width="100%"
				$maxWidth="342px"
				$margin="0 16px 0 0"
			>
				<Row>
					<CardDetails
						types={types}
						src={sprites.other.dream_world.front_default}
						name={name}
						pokemonId={pokemonId}
						weight={weight}
						height={height}
						stats={stats}
					/>

					<LinksRow>
						{isPreviousPokemonExist && (
							<Button withLeftArrow>
								<Link to={`/pokemon/${previousPokemonId}/`}>Back #{formattedPreviousPokemonId}</Link>
							</Button>
						)}

						<Button withRightArrow>
							<Link to={`/pokemon/${nextPokemonId}/`}>Next #{formattedNextPokemonId}</Link>
						</Button>

					</LinksRow>
				</Row>
			</Col>

			<Col
				$flex="1 1 .01%"
				$width="auto"
			>
				<TableRow
					title="Versions"
				>
					<Row  $margin="0 -16px">
						{varieties.map((version) => (
							<Col $padding="0 16px" key={version.pokemon.name}>
								<NavLink to={`/pokemon/${version.pokemon.name}`}>{version.pokemon.name}</NavLink>
							</Col>
						))}
					</Row>

				</TableRow>
				<TableRow
					title="Story"
				>
					{description}
				</TableRow>

				<TableRow
					title="Abilities"
				>
					<Row $margin="0 -4px" >
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

				<TableRow
					title="Catch rate"
				>
					{catchRate}%
				</TableRow>

				<TableRow
					title="Egg group"
				>

					<Row $margin="0 -4px" >
						{egg_groups.map((item) => (
							<Col $padding="0 4px" key={item.name}>{item.name}</Col>
						))}
					</Row>
				</TableRow>

				<TableRow
					title="Evolution"
				>
					<Row $margin="-24px -20px 0">
						{evolution_chain.url && (
							<Col $maxWidth="190px" $padding="24px 20px 0">
								<Evolution url={evolution_chain.url} />
							</Col>

						)}
					</Row>
				</TableRow>

			</Col>
		</Row>
	);
};

export default Details;
