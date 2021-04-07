import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../assets/theme';
import { WeatherIcon } from './components/WeatherIcon';
import { WeatherMap } from './components/WeatherMap';
import { useGetWeatherData } from './useGetWeatherData';

const citiesPosition: {
    [city: string]: {
        top: string;
        left: string;
    };
} = {
    paris: {
        top: '24',
        left: '46',
    },
};

export const WeatherScene: React.FC = () => {
    const { weatherDataByCity } = useGetWeatherData();
    return (
        <ThemeProvider theme={theme}>
            <ContentContainer>
                {weatherDataByCity.map((city) => {
                    const cityPosition = citiesPosition[city.cityName.toLowerCase()];
                    return (
                        <StyledWeatherIcon
                            top={cityPosition.top}
                            left={cityPosition.left}
                            icon={city.weathers[0].weatherIcon}
                        />
                    );
                })}
                <WeatherMap />
            </ContentContainer>
        </ThemeProvider>
    );
};

const ContentContainer = styled.div`
    position: relative;
    height: 100%;
    width: 50%;
`;

const StyledWeatherIcon = styled(WeatherIcon)<{ top: string; left: string }>`
    position: absolute;
    top: ${({ top }) => top}%;
    left: ${({ left }) => left}%;
`;
