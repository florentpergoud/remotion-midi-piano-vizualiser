import { FunctionComponent } from 'react';
import { useVideoConfig } from 'remotion';
import styled from 'styled-components';
import { TRANSITION_DURATION_IN_SECONDS } from '../constants';
import { useTranslateInAndOut } from './components/useTranslateInAndOut';

interface Props {
    subtitle: string;
    durationInFrames: number;
}

export const Subtitle: FunctionComponent<Props> = ({ subtitle, durationInFrames }) => {
    const { fps } = useVideoConfig();

    const transitionInFrames = fps * TRANSITION_DURATION_IN_SECONDS;

    const translateY = useTranslateInAndOut({
        from: -100,
        to: 0,
        durationInFrames,
        transitionInFrames,
    });

    return <Text $translateY={translateY}>{subtitle}</Text>;
};

const Text = styled.h2<{ $translateY: number }>`
    font-family: 'VisbyCF-Heavy';
    text-transform: uppercase;
    color: white;
    margin: 0;
    position: absolute;
    font-size: 34px;
    left: 40px;
    top: 130px;
    text-shadow: 7px 7px 7px rgba(0, 0, 0, 0.9);
    transform: translateY(${({ $translateY }) => `${$translateY}px`});
    max-width: 280px;
`;
