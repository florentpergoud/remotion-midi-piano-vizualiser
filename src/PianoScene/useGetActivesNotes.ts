import { useCurrentFrame } from 'remotion';
import midiData from '../api/midi.json';
import { DELAY_BEFORE_MUSIC_START } from '../constant';
import { ActiveFrameForNotes, MidiData } from '../interface';

const typedMidiData: MidiData = midiData;

const getActivesNotesAtFrame = (frame: number, typedMidiData: ActiveFrameForNotes) => {
    const activeNotes: Array<number> = [];
    Object.keys(typedMidiData).forEach((midiNumber: string) => {
        const isNoteActive = typedMidiData[midiNumber].includes(frame - DELAY_BEFORE_MUSIC_START);
        if (isNoteActive) {
            activeNotes.push(parseInt(midiNumber));
        }
    });
    return activeNotes;
};

export const useGetActivesNotes = () => {
    const frame = useCurrentFrame();

    return {
        activeNotesMidiNumber: getActivesNotesAtFrame(frame, typedMidiData.activeFramePerNote),
    };
};
