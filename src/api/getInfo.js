const fs = require('fs');
const toneJsMidi = require('@tonejs/midi');

const { Midi } = toneJsMidi;

const readMidi = () => {
    const midiData = fs.readFileSync('input.mid');
    const midi = new Midi(midiData);
    console.log('title: ', midi.header.name);
    console.log('meta', JSON.stringify(midi.header.meta, null, 2));
    midi.tracks.forEach((track) => {
        console.log('track name', track.name);
    });
};

readMidi();
