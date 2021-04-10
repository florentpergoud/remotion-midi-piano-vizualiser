import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { useGetWeatherData } from '../useGetWeatherData';
import { CITY_POSITIONS } from './cityPositions';
import { WeatherIcon } from './WeatherIcon';
import { WeatherMapBackground } from './WeatherMapBackground';

interface Props {
    className?: string;
}

export const WeatherMap: FunctionComponent<Props> = ({ className }) => {
    const { weatherDataByCity } = useGetWeatherData();

    return (
        <Container className={className}>
            {weatherDataByCity.map((city) => {
                const cityPosition = CITY_POSITIONS[city.cityName.toLowerCase()];
                return (
                    <StyledWeatherIcon
                        top={cityPosition.top}
                        left={cityPosition.left}
                        icon={city.weathers[0].weatherIcon}
                    />
                );
            })}
            <WeatherMapBackground />
        </Container>
    );
};

const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 10%;
`;

const StyledWeatherIcon = styled(WeatherIcon)<{ top: string; left: string }>`
    position: absolute;
    top: ${({ top }) => top}%;
    left: ${({ left }) => left}%;
    z-index: 2;
`;
