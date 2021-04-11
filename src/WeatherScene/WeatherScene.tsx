import React, { FunctionComponent } from 'react';
import { Sequence, useVideoConfig } from 'remotion';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../assets/theme';
import { MapLegend } from './components/MapLegend';
import { useTranslate } from './components/useTranslate';
import { WeatherMap } from './components/WeatherMap';
import { DisplayType } from './interface';

const Titles = {
    [DisplayType.FORECAST]: 'Prévisions pour demain',
    [DisplayType.MORNING_TEMPERATURE]: 'Température du matin',
    [DisplayType.AFTERNOON_TEMPERATURE]: "Température de l'après midi",
};

interface Props {
    displayType: DisplayType;
    durationInFrames: number;
}

const MAP_APPEARANCE_DELAY_IN_SECONDS = 1;
const DISAPPEARANCE_DURATION_IN_SECONDS = 1;

export const WeatherScene: FunctionComponent<Props> = ({ displayType, durationInFrames }) => {
    const title = Titles[displayType];

    const { fps } = useVideoConfig();

    const translateX = useTranslate({
        from: 0,
        to: -1000,
        startAtFrame: durationInFrames - DISAPPEARANCE_DURATION_IN_SECONDS * fps,
    });

    return (
        <ThemeProvider theme={theme}>
            <ContentContainer $translateX={translateX}>
                <Sequence from={0} durationInFrames={Infinity} name={`${displayType}-Title`}>
                    <StyledMapLegend title={title} />
                </Sequence>
                <Sequence from={MAP_APPEARANCE_DELAY_IN_SECONDS * fps} durationInFrames={Infinity} name="Map">
                    <StyledWeatherMap displayType={displayType} />
                </Sequence>
            </ContentContainer>
        </ThemeProvider>
    );
};

const ContentContainer = styled.div<{ $translateX: number }>`
    position: relative;
    height: 100%;
    width: 50%;
    transform: translateX(${({ $translateX }) => `${$translateX}px`});
`;

const StyledWeatherMap = styled(WeatherMap)`
    position: absolute;
    margin-top: 60px;
`;

const StyledMapLegend = styled(MapLegend)`
    position: absolute;
    margin-top: 20px;
`;
