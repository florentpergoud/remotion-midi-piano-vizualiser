import { Composition } from 'remotion';
import '../assets/font.css';
import { WeatherScene } from './WeatherScene';

const DURATION_IN_SECONDS = 5;
const FPS = 30;

export const RemotionVideo: React.FC = () => {
    return (
        <Composition
            id="WeatherScene"
            component={WeatherScene}
            durationInFrames={FPS * DURATION_IN_SECONDS}
            fps={FPS}
            width={1920}
            height={1080}
        />
    );
};
