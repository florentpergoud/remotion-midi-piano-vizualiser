import React, { FunctionComponent } from 'react';
import { Piano } from 'react-piano';
import 'react-piano/dist/styles.css';
import { AbsoluteFill, Sequence } from 'remotion';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../assets/theme';

export const PianoComposition: FunctionComponent = () => {
    const firstNote = 21;
    const lastNote = 108;

    console.log('firstNote', JSON.stringify(firstNote, null, 2));
    return (
        <ThemeProvider theme={theme}>
            <AbsoluteFill>
                <Background />
            </AbsoluteFill>
            <Sequence from={0} durationInFrames={Infinity} name="Piano">
                <PianoContainer>
                    <Piano noteRange={{ first: firstNote, last: lastNote }} activeNotes={[44, 47, 54]} />
                </PianoContainer>
            </Sequence>
        </ThemeProvider>
    );
};

const Background = styled.div`
    height: 100%;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.backgroundColor};
`;

const PianoContainer = styled.div`
    width: 100%;
    height: 20%;
    position: absolute;
    bottom: 0;
`;
