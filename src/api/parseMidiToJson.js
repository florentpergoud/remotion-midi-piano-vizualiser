const fs = require('fs');
const { Midi } = require('@tonejs/midi');

const readMidi = () => {
    const midiData = fs.readFileSync('input.mid');
    const midi = new Midi(midiData);
    fs.writeFileSync('./src/api/midi.json', JSON.stringify(midi), null, 4);
};
readMidi();
