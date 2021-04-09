import React from 'react';
import { AbsoluteFill, Img } from 'remotion';
import styled, { ThemeProvider } from 'styled-components';
import Background from '../assets/Background.jpg';
import { theme } from '../assets/theme';
import { WeatherMap } from './components/WeatherMap';
import { MapLegend } from './MapLegend';

export const WeatherScene: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <AbsoluteFill>
                <BackgroundImage src={Background} />
            </AbsoluteFill>
            <ContentContainer>
                <StyledMapLegend />
                <StyledWeatherMap />
            </ContentContainer>
        </ThemeProvider>
    );
};

const ContentContainer = styled.div`
    position: relative;
    height: 100%;
    width: 50%;
`;

const StyledWeatherMap = styled(WeatherMap)`
    position: absolute;
    margin-top: 60px;
`;

const StyledMapLegend = styled(MapLegend)`
    position: absolute;
    margin-top: 20px;
`;

const BackgroundImage = styled(Img)`
    height: 100%;
    width: 100%;
`;
