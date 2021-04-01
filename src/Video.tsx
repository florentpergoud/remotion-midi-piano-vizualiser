import { Composition } from 'remotion';
import '../assets/font.css';
import { ThermometerScene } from './ThermometerScene';

export const RemotionVideo: React.FC = () => {
    return (
        <Composition
            id="ThermometerScene"
            component={ThermometerScene}
            durationInFrames={150}
            fps={30}
            width={1080}
            height={1920}
        />
    );
};
