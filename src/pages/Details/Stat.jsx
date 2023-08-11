import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const max = 255;

const Indicator = styled.div`
	width: 148px;
	height: 6px;
	background-color: gray;
`;

const FilledValue = styled.div`
	width: ${({ $width }) => $width}%;
	height: 6px;
	background-color: red;
`;

const Stat = ({ name, value }) => {
	const percent = (value * 100) / max;

	return (
		<div>
			<span>{name}</span>
			<span>{value}</span>

			<Indicator>
				<FilledValue $width={percent} />
			</Indicator>
		</div>
	);
};

Stat.propTypes = {
	name: PropTypes.string.isRequired,
	value: PropTypes.number.isRequired,
};

export default Stat;
