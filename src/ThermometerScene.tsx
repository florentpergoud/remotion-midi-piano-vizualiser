import React from 'react';
import { AbsoluteFill } from 'remotion';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../assets/theme';
import { Thermometer } from './components/Thermometer';

export const ThermometerScene: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <Container>
                <Background />
                <ContentContainer>
                    <StyledThermometer />
                </ContentContainer>
            </Container>
        </ThemeProvider>
    );
};

const Container = styled.div``;

const Background = styled(AbsoluteFill)``;

const ContentContainer = styled(AbsoluteFill)``;

const StyledThermometer = styled(Thermometer)`
    height: 400px;
    width: 400px;
    margin: auto;
`;
