import { interpolate, useCurrentFrame } from 'remotion';

export const useFadeInAndOutOpacity = (
    transitionDurationInFrames: number,
    durationInFrames: number,
): { opacity: number } => {
    const frame = useCurrentFrame();

    const opacity = interpolate(
        frame,
        [0, transitionDurationInFrames, durationInFrames - transitionDurationInFrames, durationInFrames],
        [0, 1, 1, 0],
    );

    return { opacity };
};
