import React from "react";
import {useQuery} from "react-query";
import apiClient from "api/apiClient"

const Evolution = ({ url }) => {
	const {
		data = {},
		isLoading,
		error,
	} = useQuery(
		["evolution-chain", url],
		() => apiClient.get(url),
		{ retry: false },
	);

	console.log(data);

	if (isLoading) {
		return (
			<div>Loading chain...</div>
		);
	}

	if (error) {
		return (
			<div>Error: {error.message}</div>
		);
	}

	return (
		<div>
			Evolution
		</div>
	);
};

export default Evolution;
