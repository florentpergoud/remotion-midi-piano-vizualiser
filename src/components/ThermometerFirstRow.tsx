import { FunctionComponent } from 'react';
import styled from 'styled-components';

interface Props {
    className?: string;
}

export const ThermometerFirstRow: FunctionComponent<Props> = ({ className }) => {
    return (
        <Container className={className}>
            <TemperatureText>23.9</TemperatureText>
            <TemperatureUnit>.C</TemperatureUnit>
        </Container>
    );
};

const Container = styled.div`
    opacity: 0.8;
    display: flex;
    align-items: flex-end;
`;

const TemperatureText = styled.text`
    font-family: ${({ theme }) => theme.fonts.dseg7Modern};
    color: black;
    font-size: 80px;
`;

const TemperatureUnit = styled.text`
    font-family: ${({ theme }) => theme.fonts.dseg14Modern};
    color: black;
    font-size: 30px;
`;
