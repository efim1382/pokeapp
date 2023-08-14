import React from "react";
import { useParams, NavLink } from "react-router-dom";
import NotFound from "pages/NotFound";
import Evolution from "./Evolution";
import Stat from "./Stat";
import { usePokemonDetails } from "hooks/pokemonQueries";
import { getDescription } from "helpers/pokemonHelpers";
import CardDetails from "components/CardDetails";
import { Row, Col } from "components/Layout";
import Button from "components/Button";

const maxCaptureRate = 255;

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
				<CardDetails
					types={types}
					src={sprites.other.dream_world.front_default}
					name={name}
					pokemonId={pokemonId}
					weight={weight}
					height={height}
				/>

				<Row>
					<Button withLeftArrow>

					</Button>
					<Button withRightArrow>

					</Button>
				</Row>
			</Col>

			<Col
				$flex="1 1 .01%"
				$width="auto"
			>
				{stats.map((item) => (
					<Stat key={item.stat.name} name={item.stat.name} value={item.base_stat} />
				))}

				<div>
					<p>Versions</p>

					<div>
						{varieties.map((version) => (
							<div key={version.pokemon.name}>
								<NavLink to={`/pokemon/${version.pokemon.name}`}>{version.pokemon.name}</NavLink>
							</div>
						))}
					</div>
				</div>

				<div>
					<p>Story</p>
					<p>{description}</p>
				</div>

				<div>
					<p>Abilities</p>

					<div>
						{abilities.map((item) => (
							<span key={item.ability.name}>{item.ability.name}</span>
						))}
					</div>
				</div>

				<div>
					<p>Catch rate</p>
					<p>{catchRate}%</p>
				</div>

				<div>
					<p>Egg group</p>

					<div>
						{egg_groups.map((item) => (
							<span key={item.name}>{item.name}</span>
						))}
					</div>
				</div>

				{isPreviousPokemonExist && (
					<NavLink to={`/pokemon/${previousPokemonId}/`}>prev #{formattedPreviousPokemonId}</NavLink>
				)}

				<NavLink to={`/pokemon/${nextPokemonId}/`}>next #{formattedNextPokemonId}</NavLink>

				{evolution_chain.url && (
					<Evolution url={evolution_chain.url} />
				)}
			</Col>
		</Row>
	);
};

export default Details;
