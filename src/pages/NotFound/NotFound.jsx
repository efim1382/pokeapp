import React from "react";
import { Row, Col } from "components/Layout";
import styled from "styled-components";
import { media } from "styles/mixins/media";
import { ReactComponent as Illustration } from './illustration.svg';

const Container = styled(Row)`
	min-width: 100%;
	min-height: 60vh;
	justify-content: center;
	align-items: center;

	${media(768)} {
		flex-direction: column;
	}
`;

const IllustrationWrap = styled(Col)`
	margin-right: 24px;

	${media(768)} {
		margin-right: 0;
		margin-bottom: 24px;
	}
`;

const TextContainer = styled(Row)`
	flex-direction: column;

	${media(768)} {
		text-align: center;
	}
`;

const TextBold = styled.div`
	color: ${({theme}) => theme.notFound.text};
	font-size: 64px;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
	text-transform: uppercase;

	${media(768)} {
		&:nth-child(2n) {
			font-size: 40px;
			margin-top: 8px;
		}
	}
`;

const Text = styled.div`
	font-size: 24px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
	letter-spacing: 0.3px;
	color: ${({theme}) => theme.notFound.textSecondary};

	${media(768)} {
		margin-top: 24px;
	}
`;

const NotFound = () => {
	return (
		<Container>
			<IllustrationWrap>
				<Illustration />
			</IllustrationWrap>

			<Col>
				<TextContainer>
					<TextBold>
						404
					</TextBold>

					<TextBold>
						NOT FOUND
					</TextBold>

					<Text>
						Couldn’t find that. <a href="/">Try something else?</a>
					</Text>
				</TextContainer>
			</Col>
		</Container>
	);
};

export default NotFound;
