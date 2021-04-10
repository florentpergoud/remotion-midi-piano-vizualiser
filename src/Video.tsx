import { Composition } from 'remotion';
import '../assets/font.css';
import { WeatherComposition } from './WeatherComposition';

const DURATION_IN_SECONDS = 5;
const FPS = 30;

export const RemotionVideo: React.FC = () => {
    return (
        <Composition
            id="WeatherComposition"
            component={WeatherComposition}
            durationInFrames={FPS * DURATION_IN_SECONDS}
            fps={FPS}
            width={1920}
            height={1080}
        />
    );
};
