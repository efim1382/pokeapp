import styled from "styled-components";
import { media } from "styles/mixins/media";

const CardWrap = styled.div`
	width: 100%;
	max-width: 25%;
	min-width: 288px;
	min-height: 400px;
	padding: 0 12px 24px;
	box-sizing: border-box;

	${media(1280)} {
		max-width: 33%;
	}

	${media(880)} {
		max-width: 50%;
	}

	${media(590)} {
		max-width: 100%;
	}
`;

export default CardWrap;
