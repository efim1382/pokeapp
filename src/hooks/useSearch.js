import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useSearch = () => {
	const navigate = useNavigate();
	const [value, setValue] = useState("");

	const onChange = (event) => setValue(event.target.value);

	const onSubmit = (event) => {
		event.preventDefault();

		if (!value) {
			return;
		}

		navigate(`/pokemon/${value}/`);
		setValue("");
	};

	return {
		value,
		onChange,
		onSubmit,
	};
};

export default useSearch;
