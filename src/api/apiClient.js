const apiConfig = {
	baseUrl: "https://pokeapi.co/api/v2",

	headers: {
		"Content-Type": "application/json",
	},
};

const generateUrl = (path) => {
	const { baseUrl } = apiConfig;

	if (path.startsWith("https://")) {
		return path;
	}

	return `${baseUrl}${path}`;
};

const apiClient = () => {
	const { headers } = apiConfig;
	const options = {};

	const get = async (path) => {
		const url = generateUrl(path);
		const response = await fetch(url, { headers, ...options });

		if (!response.ok) {
			const message = await response.text();

			const errorObject = {
				code: response.status,
				message,
			};

			throw errorObject;
		}

		return await response.json();
	};

	return {
		get,
	};
};

export default apiClient();
