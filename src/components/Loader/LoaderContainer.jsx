import React from "react";
import PropTypes from "prop-types";
import { Row } from "components/Layout";

const LoaderContainer = ({ children }) => {
	return (
		<Row
			$minWidth="100%"
			$minHeight="60vh"
			$justifyContent="center"
			$alignItems="center"
		>
			{children}
		</Row>
	);
};

LoaderContainer.propTypes = {
	children: PropTypes.any.isRequired,
};

export default LoaderContainer;
