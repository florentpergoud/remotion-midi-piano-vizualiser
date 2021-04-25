import { useCurrentFrame } from 'remotion';
import midiData from '../api/midi.json';

export const useGetActivesNotes = () => {
    const frame = useCurrentFrame();

    const activeNotesMidiNumber = midiData[frame].map((note: { midi: number }) => note.midi);

    return {
        activeNotesMidiNumber,
    };
};
