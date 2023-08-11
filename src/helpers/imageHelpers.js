export const getAvatarUrl = (id) => {
	const baseURL = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/";
	return `${baseURL}${String(id).padStart(3, "0")}.png`;
};
