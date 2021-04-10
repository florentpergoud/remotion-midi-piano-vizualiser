import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { useGetWeatherData } from '../api/useGetWeatherData';
import { transformLatToMapTopPosition, transformLongToMapLeftPosition } from './utils';
import { WeatherIcon } from './WeatherIcon';
import { WeatherMapBackground } from './WeatherMapBackground';

interface Props {
    className?: string;
}

export const WeatherMap: FunctionComponent<Props> = ({ className }) => {
    const { weatherDataByCity } = useGetWeatherData();

    return (
        <Container className={className}>
            <CityContainer>
                {weatherDataByCity.map((city) => {
                    const top = transformLatToMapTopPosition(city.lat);
                    const left = transformLongToMapLeftPosition(city.lon);
                    return <StyledWeatherIcon $top={top} $left={left} icon={city.weathers[0].weatherIcon} />;
                })}
            </CityContainer>
            <WeatherMapBackground />
        </Container>
    );
};

const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    padding-top: 10%;
    position: relative;
`;

const CityContainer = styled.div`
    position: absolute;
    height: 80%;
    width: 92%;
    display: flex;
    justify-content: center;
`;

const StyledWeatherIcon = styled(WeatherIcon)<{ $top: number; $left: number }>`
    position: absolute;
    top: ${({ $top }) => $top - 1.5}%;
    left: ${({ $left }) => $left - 2}%;
    z-index: 2;
`;
