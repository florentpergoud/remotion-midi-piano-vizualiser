import { Composition } from 'remotion';
import { PianoComposition } from './PianoComposition';

const TOTAL_DURATION = 10;
const FPS = 30;

export const RemotionVideo: React.FC = () => {
    return (
        <Composition
            id="PianoScene"
            component={PianoComposition}
            durationInFrames={FPS * TOTAL_DURATION}
            fps={FPS}
            width={1920}
            height={1080}
        />
    );
};
