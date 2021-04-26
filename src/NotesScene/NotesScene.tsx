import { FunctionComponent } from 'react';
import { useCurrentFrame } from 'remotion';
import styled from 'styled-components';
import midiData from '../api/midi.json';
import { getLeftPositionForNote } from './utils';

const renderNotesForFrame = (frame: number) => {
    const activeNotesMidiNumber = midiData[frame].map((note: { midi: number }) => note.midi);
    return activeNotesMidiNumber.map((note: number) => {
        const leftPosition = getLeftPositionForNote(note);
        return <Note $left={`${leftPosition}%`} $bottom="0" />;
    });
};

export const NotesScene: FunctionComponent = () => {
    const frame = useCurrentFrame();
    return <Container>{renderNotesForFrame(frame)}</Container>;
};

const Container = styled.div`
    height: 83%;
    width: 100%;
    position: relative;
`;

const Note = styled.div<{ $left: string; $bottom: string }>`
    background-color: red;
    height: 100px;
    width: 1.8%;
    position: absolute;
    bottom: 0;
    left: ${({ $left }) => $left};
`;
