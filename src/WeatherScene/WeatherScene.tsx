import React, { FunctionComponent } from 'react';
import { Sequence, useVideoConfig } from 'remotion';
import styled from 'styled-components';
import { WeatherIcons } from './components/WeatherIcons';
import { DisplayType } from './interface';
import { Subtitle } from './Subtitle';

const Titles = {
    [DisplayType.FORECAST]: 'Prévisions',
    [DisplayType.MORNING_TEMPERATURE]: 'Température du matin',
    [DisplayType.AFTERNOON_TEMPERATURE]: "Température de l'après midi",
};

interface Props {
    displayType: DisplayType;
    durationInFrames: number;
}

const WEATHER_APPEARANCE_DELAY_IN_SECONDS = 1;

export const WeatherScene: FunctionComponent<Props> = ({ displayType, durationInFrames }) => {
    const subtitle = Titles[displayType];

    const { fps } = useVideoConfig();
    const weatherAppearanceInFrame = WEATHER_APPEARANCE_DELAY_IN_SECONDS * fps;
    return (
        <ContentContainer>
            <Sequence from={0} durationInFrames={durationInFrames} name={`${displayType}-Title`}>
                <Subtitle subtitle={subtitle} durationInFrames={durationInFrames} />
            </Sequence>
            <Sequence
                from={WEATHER_APPEARANCE_DELAY_IN_SECONDS * fps}
                durationInFrames={durationInFrames - weatherAppearanceInFrame}
                name="Map"
            >
                <StyledWeatherIcons
                    displayType={displayType}
                    durationInFrames={durationInFrames - weatherAppearanceInFrame}
                />
            </Sequence>
        </ContentContainer>
    );
};

const ContentContainer = styled.div`
    position: relative;
    height: 100%;
    width: 50%;
`;

const StyledWeatherIcons = styled(WeatherIcons)`
    position: absolute;
    margin-top: 60px;
`;
