const fs = require('fs');
const { Midi } = require('@tonejs/midi');

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

const convertMidiToDataPerFrame = (midi) => {
    const dataPerFrame = [];

    for (let frame = 0; frame < midi.duration * FPS; frame++) {
        const currentSecondInVideo = frame / FPS;
        const activesNotesAtFrame = getActiveNotesFromTrack(currentSecondInVideo, midi.tracks[0]);
        dataPerFrame.push(activesNotesAtFrame);
    }

    return dataPerFrame;
};

const readMidi = () => {
    const midiData = fs.readFileSync('input.mid');
    const midi = new Midi(midiData);
    const dataPerFrame = convertMidiToDataPerFrame(midi);
    fs.writeFileSync('./src/api/midi.json', JSON.stringify(dataPerFrame), null, 4);
};
readMidi();
