export const getAvatarUrl = (id) => {
	const baseURL = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/";
	return `${baseURL}${String(id).padStart(3, "0")}.png`;
};

export const getDescription = (arrayDescriptions = []) => {
	const { flavor_text } = arrayDescriptions.find((item) => item.language.name === "en");
	return flavor_text;
};

export const getBeautifiedId = (id) => String(id).padStart(4, "0");
