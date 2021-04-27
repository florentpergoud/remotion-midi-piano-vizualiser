import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { BASE_NOTE_HEIGHT } from '../constant';
import { NoteBoundaries } from '../interface';
import { getLeftPositionForNote, groupFrames } from './utils';

interface Props {
    midiNote: string;
    frame: number;
    activeFrames: Array<number>;
}

export const NoteChannel: FunctionComponent<Props> = ({ midiNote, frame, activeFrames }) => {
    const leftPosition = getLeftPositionForNote(parseInt(midiNote));
    const groupedFrames = groupFrames(activeFrames);

    const renderNote = (note: NoteBoundaries) => {
        if (frame + 980 < note.startFrame) return null;
        if (note.endFrame < frame) return null;

        const durationInFrame = note.endFrame - note.startFrame;

        return (
            <Note
                key={`${note.startFrame} -> ${note.endFrame} -${midiNote}`}
                $bottom={`${note.startFrame * BASE_NOTE_HEIGHT}%`}
                $height={`${durationInFrame * BASE_NOTE_HEIGHT}%`}
            />
        );
    };

    return (
        <NoteContainer key={`midiNote-${midiNote}`} $left={`${leftPosition}%`}>
            {groupedFrames.map(renderNote)}
        </NoteContainer>
    );
};

const NoteContainer = styled.div<{ $left: string }>`
    position: absolute;
    height: 100%;
    width: 1.8%;
    top: 0;
    left: ${({ $left }) => $left};
`;

const Note = styled.div<{ $bottom: string; $height: string }>`
    position: absolute;
    height: ${({ $height }) => $height};
    width: 100%;
    bottom: ${({ $bottom }) => $bottom};
    left: 0;
    background-color: red;
`;
