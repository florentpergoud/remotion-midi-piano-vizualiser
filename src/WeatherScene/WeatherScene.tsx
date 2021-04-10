import React, { FunctionComponent } from 'react';
import { AbsoluteFill, Img } from 'remotion';
import styled, { ThemeProvider } from 'styled-components';
import Background from '../../assets/Background.jpg';
import { theme } from '../../assets/theme';
import { WeatherMap } from './components/WeatherMap';
import { DisplayType } from './interface';
import { MapLegend } from './MapLegend';

const Titles = {
    [DisplayType.FORECAST]: 'Prévisions pour la journée',
    [DisplayType.MORNING_TEMPERATURE]: 'Température du matin',
    [DisplayType.AFTERNOON_TEMPERATURE]: "Température de l'après midi",
};

interface Props {
    displayType: DisplayType;
}

export const WeatherScene: FunctionComponent<Props> = ({ displayType }) => {
    const title = Titles[displayType];

    return (
        <ThemeProvider theme={theme}>
            <AbsoluteFill>
                <BackgroundImage src={Background} />
            </AbsoluteFill>
            <ContentContainer>
                <StyledMapLegend title={title} />
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
