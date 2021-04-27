import fs from 'fs';
import toneJsMidi from '@tonejs/midi';

const { Midi } = toneJsMidi;

const FPS = 60;

const isNoteActive = (currentSecondInVideo, note) => {
    if (note.time > currentSecondInVideo) {
        return false;
    }

    if (note.time + note.duration < currentSecondInVideo) {
        return false;
    }

    return true;
};

const getActiveNotesFromTrack = (currentSecondInVideo, track) => {
    return track.notes
        .filter((note) => isNoteActive(currentSecondInVideo, note))
        .map((note) => ({
            midi: note.midi,
        }));
};

const convertMidiToActiveFramePerNote = (midi) => {
    const dataPerFrame = {};

    for (let frame = 0; frame < midi.duration * FPS; frame++) {
        const currentSecondInVideo = frame / FPS;
        const activesNotesAtFrame = getActiveNotesFromTrack(currentSecondInVideo, midi.tracks[0]);

        activesNotesAtFrame.map((note) => {
            if (!dataPerFrame[note.midi]) {
                dataPerFrame[note.midi] = [];
            }
            dataPerFrame[note.midi].push(frame);
        });
    }

    return dataPerFrame;
};
const readMidi = () => {
    const midiData = fs.readFileSync('input.mid');
    const midi = new Midi(midiData);

    const activeFramePerNote = convertMidiToActiveFramePerNote(midi);
    const dataToWrite = { activeFramePerNote, duration: midi.duration };

    fs.writeFileSync('./src/api/midi.json', JSON.stringify(dataToWrite), null, 4);
};

readMidi();
