import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { useGetWeatherData } from '../../api/useGetWeatherData';
import { DisplayType } from '../interface';
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
    const { weatherDataByCity } = useGetWeatherData();

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
                    const rawTemperature =
                        displayType === DisplayType.MORNING_TEMPERATURE
                            ? city.weathers[0].temerature.morning
                            : city.weathers[0].temerature.evening;
                    const temperature = rawTemperature.toFixed(0);

                    return (
                        <TemperatureContainer key={index} $top={top} $left={left}>
                            <TemperatureText>{temperature}</TemperatureText>
                        </TemperatureContainer>
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

const TemperatureContainer = styled.div<{ $top: number; $left: number }>`
    position: absolute;
    z-index: 2;
    top: ${({ $top }) => $top}%;
    left: ${({ $left }) => $left + 1}%;
    height: 54px;
    width: 54px;
    border-radius: 27px;
    background-color: ${({ theme }) => theme.colors.primaryDarker};
    /* background-color: ${({ theme }) => theme.colors.white}; */
    /* background-color: rgba(255, 255, 255, 0.6); */
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 4px;
`;

const TemperatureText = styled.h2`
    font-family: 'VisbyCF-Heavy';
    font-size: 28px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.white};
    /* color: ${({ theme }) => theme.colors.primaryDarker}; */
    margin: 0;
`;
