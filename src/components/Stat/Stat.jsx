import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Row from "components/Layout/Row";
import Col from "components/Layout/Col";

const max = 255;

const Indicator = styled.div`
	height: 6px;
	background-color: #EEEEEE;
	border-radius: 4px;
`;

const FilledValue = styled.div`
	width: ${({ $width }) => $width}%;
	height: 6px;
	background-color: ${({theme}) => theme.stat.progressBar};
	border-radius: 4px;
`;

const Name = styled.span`
	color: ${({theme}) => theme.stat.text};
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: 24px;
`;
const Value = styled.span`
	color: ${({theme}) => theme.stat.text};
	font-size: 16px;
	font-style: normal;
	font-weight: 700;
	line-height: 24px;
`;

const Stat = ({ name, value }) => {
	const percent = (value * 100) / max;

	return (
		<Row>
			<Row
				$width="100%"
				$justifyContent="space-between"
			>
				<Name>{name}</Name>
				<Value>{value}</Value>
			</Row>

			<Col
				$margin="2px 0 0 0"
				$width="100%"
			>
				<Indicator>
					<FilledValue $width={percent} />
				</Indicator>
			</Col>
		</Row>
	);
};

Stat.propTypes = {
	name: PropTypes.string.isRequired,
	value: PropTypes.number.isRequired,
};

export default Stat;
