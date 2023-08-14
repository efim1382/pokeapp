import React from "react";
import {Row, Col} from "components/Layout";

const LoaderContainer = ({children}) => {
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

export default LoaderContainer;
