import { interpolate, useCurrentFrame } from 'remotion';
import { useTranslate } from './useTranslate';

export const useTranslateInAndOut = ({
    from,
    to,
    durationInFrames,
    transitionInFrames,
}: {
    from: number;
    to: number;
    durationInFrames: number;
    transitionInFrames: number;
}): number => {
    const frame = useCurrentFrame();

    const inTranslateX = useTranslate({
        from,
        to,
    });

    const outTranslateX = interpolate(
        frame,
        [0, durationInFrames - transitionInFrames, durationInFrames],
        [to, to, from],
    );

    return inTranslateX + outTranslateX;
};
