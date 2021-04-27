import { FunctionComponent } from 'react';
import { useCurrentFrame } from 'remotion';
import styled from 'styled-components';
import midi from '../api/midi.json';
import { MidiData } from '../interface';
import { NoteChannel } from './NoteChannel';

const midiData: MidiData = midi;
const BASE_NOTE_HEIGHT = 0.1;

export const NotesScene: FunctionComponent = () => {
    const frame = useCurrentFrame();

    const renderChannels = (midiNote: string) => (
        <NoteChannel midiNote={midiNote} activeFrames={midiData.activeFramePerNote[midiNote]} frame={frame} />
    );

    return (
        <Container>
            <MovingNoteContainer $translateY={frame * BASE_NOTE_HEIGHT}>
                {Object.keys(midiData.activeFramePerNote).map(renderChannels)}
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
