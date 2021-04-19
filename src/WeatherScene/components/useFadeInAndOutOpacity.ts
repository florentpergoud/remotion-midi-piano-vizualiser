import { interpolate, useCurrentFrame } from 'remotion';

export const useFadeInAndOutOpacity = (transitionDurationInFrames: number, durationInFrames: number): number => {
    const frame = useCurrentFrame();

    return interpolate(
        frame,
        [0, transitionDurationInFrames, durationInFrames - transitionDurationInFrames, durationInFrames],
        [0, 1, 1, 0],
    );
};
