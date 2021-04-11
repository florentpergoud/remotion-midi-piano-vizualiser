import React, { FunctionComponent } from 'react';
import { AbsoluteFill, Img, Sequence, useVideoConfig } from 'remotion';
import styled from 'styled-components';
import Background from '../assets/Background.jpg';
import {
    AFTERNOON_TEMPERATURE_DURATION_IN_SECONDS,
    DELAY_BEFORE_BEGINNING_IN_SECONDS,
    FORECAST_DURATION_IN_SECONDS,
    MORNING_TEMPERATURE_DURATION_IN_SECONDS,
} from './constants';
import { DisplayType } from './WeatherScene/interface';
import { WeatherScene } from './WeatherScene/WeatherScene';

export const WeatherComposition: FunctionComponent = () => {
    const { fps } = useVideoConfig();
    const weatherSceneDurationInFrames = FORECAST_DURATION_IN_SECONDS * fps;
    const morningTemperatureSceneDurationInFrames = MORNING_TEMPERATURE_DURATION_IN_SECONDS * fps;
    const afternoonTemperatureSceneDurationInFrames = AFTERNOON_TEMPERATURE_DURATION_IN_SECONDS * fps;

    const delayBeforeCompositionStart = DELAY_BEFORE_BEGINNING_IN_SECONDS * fps;
    const delayBeforeMorningTemperatureStart = delayBeforeCompositionStart + weatherSceneDurationInFrames;
    const delayBeforeAfternoonTemperatureStart =
        delayBeforeMorningTemperatureStart + morningTemperatureSceneDurationInFrames;

    return (
        <>
            <AbsoluteFill>
                <BackgroundImage src={Background} />
            </AbsoluteFill>
            <Sequence
                from={delayBeforeCompositionStart}
                durationInFrames={weatherSceneDurationInFrames}
                name="Forecast"
            >
                <WeatherScene displayType={DisplayType.FORECAST} durationInFrames={weatherSceneDurationInFrames} />
            </Sequence>
            <Sequence
                from={delayBeforeMorningTemperatureStart}
                durationInFrames={morningTemperatureSceneDurationInFrames}
                name="Morning Temperature"
            >
                <WeatherScene
                    displayType={DisplayType.MORNING_TEMPERATURE}
                    durationInFrames={morningTemperatureSceneDurationInFrames}
                />
            </Sequence>
            <Sequence
                from={delayBeforeAfternoonTemperatureStart}
                durationInFrames={afternoonTemperatureSceneDurationInFrames}
                name="Afternnon Temperature"
            >
                <WeatherScene
                    displayType={DisplayType.AFTERNOON_TEMPERATURE}
                    durationInFrames={afternoonTemperatureSceneDurationInFrames}
                />
            </Sequence>
        </>
    );
};

const BackgroundImage = styled(Img)`
    height: 100%;
    width: 100%;
`;
