import React, { FunctionComponent } from 'react';
import { AbsoluteFill, Sequence } from 'remotion';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../assets/theme';
import { PianoScene } from './PianoScene/PianoScene';

export const PianoComposition: FunctionComponent = () => {
    return (
        <ThemeProvider theme={theme}>
            <AbsoluteFill>
                <Background />
            </AbsoluteFill>
            <Sequence from={0} durationInFrames={Infinity} name="Piano">
                <PianoScene />
            </Sequence>
        </ThemeProvider>
    );
};

const Background = styled.div`
    height: 100%;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.backgroundColor};
`;
