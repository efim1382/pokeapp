import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "components/Layout";
import styled from "styled-components";
import { media } from "styles/mixins/media";

const TRow = styled(Row)`
	padding: 16px 32px;
	flex-direction: column;
	background-color: ${({theme}) => theme.table.bgFirst};

	&:nth-child(2n) {
		background-color: ${({theme}) => theme.table.bgSecond};
	}

	${media("tablet")} {
		padding: 16px;
	}
`;

const Title = styled(Col)`
	color: ${({theme}) => theme.table.title};
	font-size: 24px;
	font-style: normal;
	font-weight: 400;
	line-height: 32px;
	padding-bottom: 16px;
`;

const Value = styled(Col)`
	color: ${({theme}) => theme.table.value};
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: 24px;
	max-width: 100%;
`;

const TableRow = ({ title, children }) => {
	return (
		<TRow>
			<Title>{title}</Title>
			<Value>{children}</Value>
		</TRow>
	);
};

TableRow.propTypes = {
	title: PropTypes.string,
	children: PropTypes.any,
};

export default TableRow;
