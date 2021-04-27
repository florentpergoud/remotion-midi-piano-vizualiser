import { BLACK_NOTE_WIDH_IN_PERCENT, FIRST_NOTE, WHITE_NOTE_WIDH_IN_PERCENT } from '../constant';
import { NoteBoundaries } from '../interface';

export const isBlackKeyboardNote = (midi: number): boolean => {
    if ((midi - 22) % 12 === 0) return true;
    if ((midi - 25) % 12 === 0) return true;
    if ((midi - 27) % 12 === 0) return true;
    if ((midi - 30) % 12 === 0) return true;
    if ((midi - 32) % 12 === 0) return true;
    return false;
};

const countWhiteNotesAtLeftOfNote = (midi: number) => {
    let whiteNotesAtLeft = 0;

    for (let currentMidi = FIRST_NOTE; currentMidi < midi; currentMidi++) {
        const isMidiBlackNote = isBlackKeyboardNote(currentMidi);
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
