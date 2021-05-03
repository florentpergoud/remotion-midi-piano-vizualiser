import { FunctionComponent } from 'react';
import { AbsoluteFill, useVideoConfig } from 'remotion';
import styled from 'styled-components';
import { useTitleInfo } from './useTitleInfo';
import { useTranslate } from './useTranslate';

export const TitleScene: FunctionComponent = () => {
    const { title, author, midiCreator } = useTitleInfo();
    const { width } = useVideoConfig();
    const { fps } = useVideoConfig();
    const marginBottom = width * 0.1;

    const translateX = useTranslate({ from: 400, to: -900, startAtFrame: fps });
    const translateY = useTranslate({ from: 200, to: -500, startAtFrame: fps });
    const scale = useTranslate({ from: 1, to: 0.5, startAtFrame: fps * 0.95 });

    return (
        <Container $marginBottom={marginBottom} $scale={scale}>
            <TextContainer $translateX={translateX} $translateY={translateY}>
                <Title as="h1">{title}</Title>
                {author && <Author as="h2">{author}</Author>}
                {midiCreator && <BaseText as="h3">{`Midi file by ${midiCreator}`}</BaseText>}
            </TextContainer>
        </Container>
    );
};

const Container = styled(AbsoluteFill)<{ $marginBottom: number; $scale: number }>`
    padding-bottom: ${({ $marginBottom }) => $marginBottom}px;
    transform: ${({ $scale }) => `scale(${$scale})`};
`;

const TextContainer = styled.div<{ $translateX: number; $translateY: number }>`
    position: absolute;
    left: ${({ $translateX }) => $translateX}px;
    top: ${({ $translateY }) => $translateY}px;
    width: 100%;
    height: 100%;
`;

const BaseText = styled.span`
    font-family: ${({ theme }) => theme.fonts.roboto};
    color: white;
    font-size: 28px;
`;

const Title = styled(BaseText)`
    font-size: 60px;
`;
const Author = styled(BaseText)`
    font-size: 44px;
`;
