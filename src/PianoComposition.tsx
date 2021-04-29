import  { FunctionComponent } from 'react';
import { Audio, AbsoluteFill, Sequence } from 'remotion';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../assets/theme';
import { NotesScene } from './NotesScene/NotesScene';
import { PianoScene } from './PianoScene/PianoScene';
import audio from '../input.mp3'

export const PianoComposition: FunctionComponent = () => {
    return (
        <ThemeProvider theme={theme}>
            <AbsoluteFill>
                <Background />
            </AbsoluteFill>
            <Sequence from={0} durationInFrames={Infinity} name="Notes">
                <NotesScene />
            </Sequence>
            <Sequence from={0} durationInFrames={Infinity} name="Piano">
                <PianoScene />
            </Sequence>
            <Audio src={audio}/>
        </ThemeProvider>
    );
};

const Background = styled.div`
    height: 100%;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.backgroundColor};
`;
