import { Composition } from 'remotion';
import '../assets/font.css';
import midiData from './api/midi.json';
import { FPS } from './constant';
import './customPianoStyles.css'; // import a set of piano color overrides
import { PianoComposition } from './PianoComposition';

const SONG_DURATION = Math.floor(midiData.duration * FPS);

const HEIGHT = 1080;
const WIDTH = 1920;

export const RemotionVideo: React.FC = () => {
    return (
        <Composition
            id="PianoComposition"
            component={PianoComposition}
            durationInFrames={SONG_DURATION}
            fps={FPS}
            width={WIDTH}
            height={HEIGHT}
        />
    );
};
