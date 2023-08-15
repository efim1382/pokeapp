export const getDescription = (arrayDescriptions = []) => {
	return arrayDescriptions.find((item) => item.language.name === "en")?.flavor_text;
};

export const getBeautifiedId = (id) => String(id).padStart(4, "0");
