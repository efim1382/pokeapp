import React from "react";
import PropTypes from "prop-types";
import { Col } from "components/Layout";

const Row = (props) => {
	const { children } = props;

	return (
		<Col
			$display="flex"
			$width="100%"
			$flexWrap="wrap"
			{...props}
		>
			{children}
		</Col>
	);
} ;

Row.propTypes = {
	children: PropTypes.any
};

export default Row;
