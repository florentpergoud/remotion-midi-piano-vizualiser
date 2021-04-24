import { Midi } from '@tonejs/midi';
import apiData from '../api/midi.json';

export const useGetActivesNotes = () => {
    const midiObject: Midi = apiData;
    return { midi: midiObject };
};
