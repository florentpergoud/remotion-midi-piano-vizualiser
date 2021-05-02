import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const useTranslate = ({
    from,
    to,
    startAtFrame = 0,
}: {
    from: number;
    to: number;
    startAtFrame?: number;
}): number => {
    const { fps } = useVideoConfig();
    const frame = useCurrentFrame();

    const animation = spring({
        frame: frame - startAtFrame,
        fps,
        config: { damping: 200 },
    });

    return interpolate(animation, [0, 1], [from, to]);
};
