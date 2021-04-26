import { BLACK_NOTES_MIDI, BLACK_NOTE_WIDH_IN_PERCENT, FIRST_NOTE, WHITE_NOTE_WIDH_IN_PERCENT } from '../constant';

const isBlackNote = (midi: number) => {
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

export const getLeftPositionForNote = (midi: number): number => {
    const isBlackNoteMidi = isBlackNote(midi);
    const whiteNotesAtLeft = countWhiteNotesAtLeftOfNote(midi);
    const leftPosition =
        WHITE_NOTE_WIDH_IN_PERCENT * whiteNotesAtLeft + (isBlackNoteMidi ? 0.5 * BLACK_NOTE_WIDH_IN_PERCENT : 0);
    return leftPosition;
};
