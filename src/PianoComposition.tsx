import React, { FunctionComponent } from 'react';
import { AbsoluteFill, Audio, Sequence } from 'remotion';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../assets/theme';
import audio from '../input.mp3';
import { DELAY_BEFORE_FIRST_NOTE, DELAY_BEFORE_MUSIC_START, TITLE_DURATION } from './constant';
import { NotesScene } from './NotesScene/NotesScene';
import { PianoScene } from './PianoScene/PianoScene';
import { TitleScene } from './TitleScene/TitleScene';

export const PianoComposition: FunctionComponent = () => {
    return (
        <ThemeProvider theme={theme}>
            <AbsoluteFill>
                <Background />
            </AbsoluteFill>

            <Sequence from={TITLE_DURATION} durationInFrames={Infinity} name="Notes">
                <NotesScene delay={DELAY_BEFORE_FIRST_NOTE} />
            </Sequence>
            <Sequence from={DELAY_BEFORE_MUSIC_START} durationInFrames={Infinity} name="Audio">
                <Audio src={audio} />
            </Sequence>
            <Sequence from={0} durationInFrames={Infinity} name="Piano">
                <PianoScene />
            </Sequence>
            <Sequence from={0} durationInFrames={Infinity} name="Title">
                <TitleScene />
            </Sequence>
        </ThemeProvider>
    );
};

const Background = styled.div`
    height: 100%;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.backgroundColor};
`;
