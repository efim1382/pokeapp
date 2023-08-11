import React from "react";
import { useParams, NavLink } from "react-router-dom";
import NotFound from "pages/NotFound";
import Evolution from "./Evolution";
import Stat from "./Stat";
import { usePokemonDetails } from "hooks/pokemonQueries";
import { getDescription, getAvatarUrl } from "helpers/pokemonHelpers";

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
		weight,
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

	const avatarUrl = getAvatarUrl(id);
	const previousPokemonId = id - 1;
	const formattedPreviousPokemonId = String(previousPokemonId).padStart(4, 0);
	const nextPokemonId = id + 1;
	const formattedNextPokemonId = String(nextPokemonId).padStart(4, 0);
	const isPreviousPokemonExist = previousPokemonId > 0;
	const description = getDescription(flavor_text_entries);
	const catchRate = ((capture_rate * 100) / maxCaptureRate).toFixed(1);

	return (
		<div>
			<img width="300" src={avatarUrl} alt={pokemonName} />
			<div>Name: {name}</div>
			<div data-testid="pokemon-weight">Weight: {weight}</div>

			{types.map((item) => (
				<span key={item.slot}>{item.type.name}</span>
			))}

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
		</div>
	);
};

export default Details;
