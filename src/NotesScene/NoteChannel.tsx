import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { BASE_NOTE_HEIGHT, BLACK_NOTE_WIDH_IN_PERCENT, WHITE_NOTE_WIDH_IN_PERCENT } from '../constant';
import { NoteBoundaries } from '../interface';
import { getLeftPositionForNote, groupFrames, isBlackKeyboardNote } from './utils';

interface Props {
    midiNote: string;
    frame: number;
    activeFrames: Array<number>;
}

export const NoteChannel: FunctionComponent<Props> = ({ midiNote, frame, activeFrames }) => {
    const intMidiNote = parseInt(midiNote);
    const isKeyboardNoteBlack = isBlackKeyboardNote(intMidiNote);

    const leftPosition = getLeftPositionForNote(intMidiNote, isKeyboardNoteBlack);
    const groupedFrames = groupFrames(activeFrames);
    const displayedFrames = 980;

    const renderNote = (note: NoteBoundaries) => {
        if (frame + displayedFrames < note.startFrame) return null;
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
        <NoteContainer
            key={`midiNote-${midiNote}`}
            $left={`${leftPosition}%`}
            $isKeyboardNoteBlack={isKeyboardNoteBlack}
        >
            {groupedFrames.map(renderNote)}
        </NoteContainer>
    );
};

const NoteContainer = styled.div<{ $left: string; $isKeyboardNoteBlack: boolean }>`
    position: absolute;
    height: 100%;
    width: ${({ $isKeyboardNoteBlack }) =>
        ($isKeyboardNoteBlack ? BLACK_NOTE_WIDH_IN_PERCENT : WHITE_NOTE_WIDH_IN_PERCENT) - 0.2}%;
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
