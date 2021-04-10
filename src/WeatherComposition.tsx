import React, { FunctionComponent } from 'react';
import { AbsoluteFill, Img, Sequence, useVideoConfig } from 'remotion';
import styled from 'styled-components';
import Background from '../assets/Background.jpg';
import { DELAY_BEFORE_BEGINNING_IN_SECONDS, FORECAST_DURATION_IN_SECONDS } from './constants';
import { DisplayType } from './WeatherScene/interface';
import { WeatherScene } from './WeatherScene/WeatherScene';

export const WeatherComposition: FunctionComponent = () => {
    const { fps } = useVideoConfig();
    const WEATHER_SCENE_DURATION_IN_FRAMES = FORECAST_DURATION_IN_SECONDS * fps;
    return (
        <>
            <AbsoluteFill>
                <BackgroundImage src={Background} />
            </AbsoluteFill>
            <Sequence
                from={DELAY_BEFORE_BEGINNING_IN_SECONDS * fps}
                durationInFrames={WEATHER_SCENE_DURATION_IN_FRAMES}
                name="Forecast"
            >
                <WeatherScene displayType={DisplayType.FORECAST} durationInFrames={WEATHER_SCENE_DURATION_IN_FRAMES} />
            </Sequence>
        </>
    );
};

const BackgroundImage = styled(Img)`
    height: 100%;
    width: 100%;
`;
