import { Composition } from 'remotion';
import { PianoComposition } from './PianoComposition';

const TOTAL_DURATION_IN_SECONDS = 10;
const FPS = 60;
const HEIGHT = 1080;
const WIDTH = 1920;

export const RemotionVideo: React.FC = () => {
    return (
        <Composition
            id="PianoScene"
            component={PianoComposition}
            durationInFrames={FPS * TOTAL_DURATION_IN_SECONDS}
            fps={FPS}
            width={WIDTH}
            height={HEIGHT}
        />
    );
};
