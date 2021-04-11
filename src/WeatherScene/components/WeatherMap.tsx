import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { useGetWeatherData } from '../../api/useGetWeatherData';
import { DisplayType } from '../interface';
import { Temperature } from './Temperature';
import { useTranslate } from './useTranslate';
import { transformLatToMapTopPosition, transformLongToMapLeftPosition } from './utils';
import { WeatherIcon } from './WeatherIcon';
import { WeatherMapBackground } from './WeatherMapBackground';

const ICON_SIZE = 85;

interface Props {
    className?: string;
    displayType: DisplayType;
}

export const WeatherMap: FunctionComponent<Props> = ({ className, displayType }) => {
    const data = useGetWeatherData();
    const {
        minimalEveningTemperature,
        maximalEveningTemperature,
        minimalMorningTemperature,
        maximalMorningTemperature,
        weatherDataByCity,
    } = data;
    const translateX = useTranslate({
        from: -1000,
        to: 0,
    });

    return (
        <Container className={className} $translateX={translateX}>
            <CitiesContainer $displayType={displayType}>
                {weatherDataByCity.map((city, index) => {
                    const top = transformLatToMapTopPosition(city.lat);
                    const left = transformLongToMapLeftPosition(city.lon);
                    if (displayType === DisplayType.FORECAST) {
                        return (
                            <StyledWeatherIcon
                                key={index}
                                $top={top}
                                $left={left}
                                icon={city.weathers[0].weatherIcon}
                            />
                        );
                    }
                    const temperature =
                        displayType === DisplayType.MORNING_TEMPERATURE
                            ? city.weathers[0].temperature.morning
                            : city.weathers[0].temperature.evening;
                    const minTemperature =
                        displayType === DisplayType.MORNING_TEMPERATURE
                            ? minimalMorningTemperature
                            : minimalEveningTemperature;
                    const maxTemperature =
                        displayType === DisplayType.MORNING_TEMPERATURE
                            ? maximalMorningTemperature
                            : maximalEveningTemperature;
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
                })}
            </CitiesContainer>
            <WeatherMapBackground />
        </Container>
    );
};

const Container = styled.div<{ $translateX: number }>`
    height: 100%;
    width: 100%;
    display: flex;
    padding-top: 10%;
    position: relative;
    transform: translateX(${({ $translateX }) => `${$translateX}px`});
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
