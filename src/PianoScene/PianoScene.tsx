import { FunctionComponent } from 'react';
import { Piano } from 'react-piano';
import 'react-piano/dist/styles.css';
import { useVideoConfig } from 'remotion';
import styled from 'styled-components';
import { useGetActivesNotes } from './useGetActivesNotes';

const FIRST_NOTE = 21;
const LAST_NOTE = 108;

export const PianoScene: FunctionComponent = () => {
    const { width } = useVideoConfig();
    const { activeNotesMidiNumber } = useGetActivesNotes();

    return (
        <PianoContainer>
            <Piano
                noteRange={{ first: FIRST_NOTE, last: LAST_NOTE }}
                activeNotes={activeNotesMidiNumber}
                playNote={(midiNumber: number) => {
                    console.log(midiNumber);
                }}
                stopNote={(midiNumber: number) => {
                    console.log(midiNumber);
                }}
                width={width}
                keyWidthToHeight={0.2}
            />
        </PianoContainer>
    );
};

const PianoContainer = styled.div`
    position: absolute;
    bottom: 0;
`;
