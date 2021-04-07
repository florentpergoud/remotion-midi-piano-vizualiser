import React from 'react';
import { AbsoluteFill } from 'remotion';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../assets/theme';
import { WeatherMap } from './components/WeatherMap';

export const WeatherScene: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <Container>
                <ContentContainer>
                    <WeatherMap />
                </ContentContainer>
            </Container>
        </ThemeProvider>
    );
};

const Container = styled.div``;

const ContentContainer = styled(AbsoluteFill)``;
