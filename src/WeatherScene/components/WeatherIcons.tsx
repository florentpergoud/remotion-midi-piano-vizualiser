import React, { FunctionComponent } from 'react';
import { interpolate, useCurrentFrame, useVideoConfig } from 'remotion';
import styled from 'styled-components';
import { useGetWeatherData } from '../../api/useGetWeatherData';
import { CityWeather, DisplayType } from '../interface';
import { Temperature } from './Temperature';
import { useFadeInAndOutOpacity } from './useFadeInAndOutOpacity';
import { useTranslate } from './useTranslate';
import { transformLatToMapTopPosition, transformLongToMapLeftPosition } from './utils';
import { WeatherIcon } from './WeatherIcon';

const ICON_SIZE = 85;

interface Props {
    className?: string;
    displayType: DisplayType;
    durationInFrames: number;
}

const TRANSITION_DURATION_IN_SECONDS = 0.5;

export const WeatherIcons: FunctionComponent<Props> = ({ className, displayType, durationInFrames }) => {
    const { fps } = useVideoConfig();
    const frame = useCurrentFrame();

    const transitionInFrames = TRANSITION_DURATION_IN_SECONDS * fps;

    const inTranslateX = useTranslate({
        from: -100,
        to: 0,
    });

    const outTranslateX = interpolate(
        frame,
        [0, durationInFrames - transitionInFrames, durationInFrames],
        [0, 0, -100],
    );

    const { opacity } = useFadeInAndOutOpacity(transitionInFrames, durationInFrames);

    const {
        minimalEveningTemperature,
        maximalEveningTemperature,
        minimalMorningTemperature,
        maximalMorningTemperature,
        weatherDataByCity,
    } = useGetWeatherData();

    const renderIcon = (city: CityWeather, index: number) => {
        const top = transformLatToMapTopPosition(city.lat);
        const left = transformLongToMapLeftPosition(city.lon);
        if (displayType === DisplayType.FORECAST) {
            return <StyledWeatherIcon key={index} $top={top} $left={left} icon={city.weathers[1].weatherIcon} />;
        }
        const temperature =
            displayType === DisplayType.MORNING_TEMPERATURE
                ? city.weathers[1].temperature.morning
                : city.weathers[1].temperature.evening;
        const minTemperature =
            displayType === DisplayType.MORNING_TEMPERATURE ? minimalMorningTemperature : minimalEveningTemperature;
        const maxTemperature =
            displayType === DisplayType.MORNING_TEMPERATURE ? maximalMorningTemperature : maximalEveningTemperature;
        return (
            <StyledTemperature
                key={index}
                $top={top}
                $left={left}
                temperature={temperature}
                minimalTemperature={minTemperature}
                maximalTemperature={maxTemperature}
            />
        );
    };

    return (
        <Container className={className} $translateX={inTranslateX + outTranslateX} $opacity={opacity}>
            <CitiesContainer $displayType={displayType}>{weatherDataByCity.map(renderIcon)}</CitiesContainer>
        </Container>
    );
};

const Container = styled.div<{ $translateX: number; $opacity: number }>`
    height: 100%;
    width: 100%;
    display: flex;
    padding-top: 10%;
    position: relative;
    transform: translateX(${({ $translateX }) => `${$translateX}px`});
    opacity: ${({ $opacity }) => $opacity};
`;

const CitiesContainer = styled.div<{ $displayType: DisplayType }>`
    position: absolute;
    height: ${({ $displayType }) => ($displayType === DisplayType.FORECAST ? '80' : '80')}%;
    width: ${({ $displayType }) => ($displayType === DisplayType.FORECAST ? '92' : '92')}%;
    display: flex;
    justify-content: center;
`;

const StyledWeatherIcon = styled(WeatherIcon)<{ $top: number; $left: number }>`
    position: absolute;
    top: ${({ $top }) => $top - 1}%;
    left: ${({ $left }) => $left - 1}%;
    z-index: 2;
    height: ${ICON_SIZE}px;
    width: ${ICON_SIZE}px;
`;

const StyledTemperature = styled(Temperature)<{ $top: number; $left: number }>`
    position: absolute;
    z-index: 2;
    top: ${({ $top }) => $top}%;
    left: ${({ $left }) => $left + 1}%;
`;
