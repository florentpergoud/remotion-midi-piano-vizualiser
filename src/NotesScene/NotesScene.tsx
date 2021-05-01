import { FunctionComponent } from 'react';
import { useCurrentFrame } from 'remotion';
import styled from 'styled-components';
import midi from '../api/midi.json';
import { BASE_NOTE_HEIGHT } from '../constant';
import { MidiData } from '../interface';
import { NoteChannel } from './NoteChannel';

const midiData: MidiData = midi;

export const NotesScene: FunctionComponent = () => {
    const frame = useCurrentFrame();

    const renderChannels = (midiNote: string) => (
        <NoteChannel
            key={`noteContainer-${midiNote}`}
            midiNote={midiNote}
            activeFrames={midiData.activeFramePerNote[midiNote]}
            frame={frame}
        />
    );

    return (
        <Container>
            <MovingNoteContainer style={{ '--translateY': `${frame * BASE_NOTE_HEIGHT}%` }}>
                {Object.keys(midiData.activeFramePerNote).map(renderChannels)}
            </MovingNoteContainer>
        </Container>
    );
};

const Container = styled.div`
    height: 83%;
    width: 100%;
`;

const MovingNoteContainer = styled.div`
    transform: translateY(var(--translateY));
    width: 100%;
    height: 100%;
`;
