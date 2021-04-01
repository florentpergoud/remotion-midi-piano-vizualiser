import {Composition} from 'remotion';
import {ThermometerScene} from './ThermometerScene';

export const RemotionVideo: React.FC = () => {
	return (
		<Composition
			id="ThermometerScene"
			component={ThermometerScene}
			durationInFrames={150}
			fps={30}
			width={1920}
			height={1080}
		/>
	);
};
