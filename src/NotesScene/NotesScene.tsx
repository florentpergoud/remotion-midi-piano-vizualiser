import { FunctionComponent } from 'react';
import { useCurrentFrame } from 'remotion';
import styled from 'styled-components';
import midi from '../api/midi.json';
import { MidiData } from '../interface';
import { getLeftPositionForNote } from './utils';

const midiData: MidiData = midi;
const BASE_NOTE_HEIGHT = 0.1;

export const NotesScene: FunctionComponent = () => {
    const frame = useCurrentFrame();

    return (
        <Container>
            <MovingNoteContainer $translateY={frame * BASE_NOTE_HEIGHT}>
                {Object.keys(midiData.activeFramePerNote).map((midiNote: string) => {
                    const leftPosition = getLeftPositionForNote(parseInt(midiNote));

                    const renderNote = (activeFrame: number) => {
                        if (activeFrame - frame > 980) return null;
                        if (activeFrame < frame) return null;
                        return (
                            <Note key={`${activeFrame} - ${midiNote}`} $bottom={`${activeFrame * BASE_NOTE_HEIGHT}%`} />
                        );
                    };

                    return (
                        <NoteContainer key={`midiNote-${midiNote}`} $left={`${leftPosition}%`}>
                            {midiData.activeFramePerNote[midiNote].map(renderNote)}
                        </NoteContainer>
                    );
                })}
            </MovingNoteContainer>
        </Container>
    );
};

const Container = styled.div`
    height: 83%;
    width: 100%;
`;

const MovingNoteContainer = styled.div<{ $translateY: number }>`
    transform: translateY(${({ $translateY }) => `${$translateY}%`});
    width: 100%;
    height: 100%;
`;

const NoteContainer = styled.div<{ $left: string }>`
    position: absolute;
    height: 100%;
    width: 1.8%;
    top: 0;
    left: ${({ $left }) => $left};
`;

const Note = styled.div<{ $bottom: string }>`
    position: absolute;
    height: ${BASE_NOTE_HEIGHT}%;
    width: 100%;
    bottom: ${({ $bottom }) => $bottom};
    left: 0;
    background-color: red;
`;
