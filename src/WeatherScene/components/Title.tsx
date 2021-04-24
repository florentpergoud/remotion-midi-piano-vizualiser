import { FunctionComponent } from 'react';
import { useVideoConfig } from 'remotion';
import styled from 'styled-components';
import { TRANSITION_DURATION_IN_SECONDS } from '../../constants';
import { useTranslateInAndOut } from './useTranslateInAndOut';

const TITLE = 'Météo de demain';

interface Props {
    className?: string;
    durationInFrames: number;
}

export const Title: FunctionComponent<Props> = ({ className, durationInFrames }) => {
    const { fps } = useVideoConfig();

    const transitionInFrames = fps * TRANSITION_DURATION_IN_SECONDS;

    const translateX = useTranslateInAndOut({
        from: -1000,
        to: 0,
        durationInFrames,
        transitionInFrames,
    });

    return (
        <GradientContainer $translateX={translateX} className={className}>
            <TitleContainer>
                <Text>{TITLE}</Text>
            </TitleContainer>
        </GradientContainer>
    );
};

const GradientContainer = styled.div<{ $translateX: number }>`
    background: ${({ theme: { colors } }) => `linear-gradient(90deg, ${colors.red} 0%, ${colors.primaryLighter} 100%)`};
    padding: 10px;
    padding-left: 0px;
    transform: translateX(${({ $translateX }) => `${$translateX}px`});
    box-shadow: 10px 10px 12px rgba(0, 0, 0, 0.8);
    height: 100px;
`;

const TitleContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.primaryDarker};
    padding: 14px 40px;
    padding-bottom: 20px;
    white-space: nowrap;
`;

const Text = styled.h1`
    font-family: 'VisbyCF-Heavy';
    font-size: 40px;
    text-transform: uppercase;
    color: white;
    margin: 0;
`;
