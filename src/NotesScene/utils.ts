import { FIRST_NOTE, WHITE_NOTE_WIDH_IN_PERCENT } from '../constant';
import { NoteBoundaries } from '../interface';

const isASharp = (midiNumber: number) => (midiNumber - 22) % 12 === 0;
const isCSharp = (midiNumber: number) => (midiNumber - 25) % 12 === 0;
const isDSharp = (midiNumber: number) => (midiNumber - 27) % 12 === 0;
const isFSharp = (midiNumber: number) => (midiNumber - 30) % 12 === 0;
const isGSharp = (midiNumber: number) => (midiNumber - 32) % 12 === 0;

export const isBlackKeyboardNote = (midiNumber: number): boolean => {
    if (isASharp(midiNumber)) return true;
    if (isCSharp(midiNumber)) return true;
    if (isDSharp(midiNumber)) return true;
    if (isFSharp(midiNumber)) return true;
    if (isGSharp(midiNumber)) return true;
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

const getBlackKeyBoardNoteOffset = (midiNumber: number): number => {
    if (isASharp(midiNumber)) return -0.3;
    if (isCSharp(midiNumber)) return -0.85;
    if (isDSharp(midiNumber)) return -0.4;
    if (isFSharp(midiNumber)) return -1;
    if (isGSharp(midiNumber)) return -0.6;
    return 0;
};

export const getLeftPositionForNote = (midi: number, isKeyboardNoteBlack: boolean): number => {
    const whiteNotesAtLeft = countWhiteNotesAtLeftOfNote(midi);
    const leftPosition = WHITE_NOTE_WIDH_IN_PERCENT * whiteNotesAtLeft;
    const blackKeyboardNoteOffset = isKeyboardNoteBlack ? getBlackKeyBoardNoteOffset(midi) : 0;
    return leftPosition + blackKeyboardNoteOffset;
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
