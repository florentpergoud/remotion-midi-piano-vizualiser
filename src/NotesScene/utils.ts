import { BLACK_NOTES_MIDI, BLACK_NOTE_WIDH_IN_PERCENT, FIRST_NOTE, WHITE_NOTE_WIDH_IN_PERCENT } from '../constant';
import { NoteBoundaries } from '../interface';

export const isBlackNote = (midi: number) => {
    return BLACK_NOTES_MIDI.includes(midi);
};

const countWhiteNotesAtLeftOfNote = (midi: number) => {
    let whiteNotesAtLeft = 0;

    for (let currentMidi = FIRST_NOTE; currentMidi < midi; currentMidi++) {
        const isMidiBlackNote = isBlackNote(currentMidi);
        if (!isMidiBlackNote) {
            whiteNotesAtLeft++;
        }
    }

    return whiteNotesAtLeft;
};

export const getLeftPositionForNote = (midi: number, isKeyboardNoteBlack: boolean): number => {
    const whiteNotesAtLeft = countWhiteNotesAtLeftOfNote(midi);
    const leftPosition =
        WHITE_NOTE_WIDH_IN_PERCENT * whiteNotesAtLeft + (isKeyboardNoteBlack ? -0.5 * BLACK_NOTE_WIDH_IN_PERCENT : 0);
    return leftPosition;
};

export const groupFrames = (activeFrames: number[]): Array<NoteBoundaries> => {
    const groupedFrames: Array<NoteBoundaries> = [{ startFrame: activeFrames[0], endFrame: activeFrames[0] }];

    for (let index = 0; index < activeFrames.length; index++) {
        const lastGroup = groupedFrames[groupedFrames.length - 1];
        if (activeFrames[index] - lastGroup.endFrame === 1) {
            groupedFrames[groupedFrames.length - 1].endFrame = activeFrames[index];
        }
        if (activeFrames[index] - lastGroup.endFrame > 1) {
            groupedFrames.push({ startFrame: activeFrames[index], endFrame: activeFrames[index] });
        }
    }

    return groupedFrames;
};
