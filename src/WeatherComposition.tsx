import React, { FunctionComponent } from 'react';
import { AbsoluteFill, Img, Sequence, useVideoConfig } from 'remotion';
import styled, { ThemeProvider } from 'styled-components';
import Background from '../assets/Background.jpg';
import { theme } from '../assets/theme';
import {
    AFTERNOON_TEMPERATURE_DURATION_IN_SECONDS,
    DELAY_BEFORE_BEGINNING_IN_SECONDS,
    DELAY_BEFORE_FORECAST_IN_SECONDS,
    DELAY_BEFORE_MAP_APPEARS,
    FORECAST_DURATION_IN_SECONDS,
    MORNING_TEMPERATURE_DURATION_IN_SECONDS,
    TOTAL_DURATION,
} from './constants';
import { Title } from './WeatherScene/components/Title';
import { WeatherMapBackground } from './WeatherScene/components/WeatherMapBackground';
import { DisplayType } from './WeatherScene/interface';
import { WeatherScene } from './WeatherScene/WeatherScene';

export const WeatherComposition: FunctionComponent = () => {
    const { fps } = useVideoConfig();
    const weatherSceneDurationInFrames = FORECAST_DURATION_IN_SECONDS * fps;
    const morningTemperatureSceneDurationInFrames = MORNING_TEMPERATURE_DURATION_IN_SECONDS * fps;
    const afternoonTemperatureSceneDurationInFrames = AFTERNOON_TEMPERATURE_DURATION_IN_SECONDS * fps;

    const delayBeforeCompositionStart = DELAY_BEFORE_BEGINNING_IN_SECONDS * fps;
    const delayBeforeMapAppears = delayBeforeCompositionStart + DELAY_BEFORE_MAP_APPEARS * fps;
    const delayBeforeForecast = delayBeforeMapAppears + DELAY_BEFORE_FORECAST_IN_SECONDS * fps;
    const delayBeforeMorningTemperatureStart = delayBeforeForecast + weatherSceneDurationInFrames;
    const delayBeforeAfternoonTemperatureStart =
        delayBeforeMorningTemperatureStart + morningTemperatureSceneDurationInFrames;

    const contentDurationInFrames = TOTAL_DURATION * fps;
    const mapDuration = contentDurationInFrames - delayBeforeMapAppears;
    const titleDuration = contentDurationInFrames - delayBeforeCompositionStart;

    return (
        <ThemeProvider theme={theme}>
            <AbsoluteFill>
                <BackgroundImage src={Background} />
            </AbsoluteFill>
            <Sequence from={delayBeforeCompositionStart} durationInFrames={titleDuration} name="ForecastTitle">
                <StyledTitle durationInFrames={titleDuration} />
            </Sequence>
            <Sequence from={delayBeforeMapAppears} durationInFrames={mapDuration} name="ForecastMap">
                <StyledWeatherMapBackground durationInFrames={mapDuration} />
            </Sequence>
            <Sequence from={delayBeforeForecast} durationInFrames={weatherSceneDurationInFrames} name="Forecast">
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
        </ThemeProvider>
    );
};

const BackgroundImage = styled(Img)`
    height: 100%;
    width: 100%;
`;

const StyledWeatherMapBackground = styled(WeatherMapBackground)`
    height: 960px;
    width: 960px;
    margin-top: 170px;
`;

const StyledTitle = styled(Title)`
    position: absolute;
    margin-top: 20px;
    z-index: 2;
`;
