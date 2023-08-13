import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledCol = styled.div`
	box-sizing: border-box;
	display: ${({display}) => display};
	height: ${({height}) => height};
	min-height: ${({minHeight}) => minHeight};
	max-height: ${({maxHeight}) => maxHeight};
	width: ${({width}) => width};
	min-width: ${({minWidth}) => minWidth};
	max-width: ${({maxWidth}) => maxWidth};
	justify-content: ${({justifyContent}) => justifyContent};
	align-content: ${({alignContent}) => alignContent};
	flex-direction: ${({flexDirection}) => flexDirection};
	align-items: ${({alignItems}) => alignItems};
	order: ${({order}) => order};
	flex: ${({flex}) => flex};
	flex-wrap: ${({flexWrap}) => flexWrap};
	color: ${({color}) => color};
	padding: ${({padding}) => padding};
	margin: ${({margin}) => margin};

`;

const Col = (props) => {
	const {children} = props;

	return (
		<StyledCol
			{...props}
		>
			{children}
		</StyledCol>
	);
};

Col.propTypes = {
	children: PropTypes.any,
};

export default Col;
