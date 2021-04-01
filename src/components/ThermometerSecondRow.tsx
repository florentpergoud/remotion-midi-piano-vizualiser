import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

interface Props {
    className?: string;
}

export const ThermometerSecondRow: FunctionComponent<Props> = ({ className }) => {
    return (
        <>
            <Container className={className}>
                <FaceText>(^_^)</FaceText>
                <HumidityText>55</HumidityText>
                <HumidityPercentage>%</HumidityPercentage>
            </Container>
        </>
    );
};

const Container = styled.text`
    padding-top: 20px;
    display: flex;
    opacity: 0.7;
`;

const FaceText = styled.text`
    font-family: ${({ theme }) => theme.fonts.sourceSerifPro};
    color: black;
    font-size: 54px;
    font-weight: bold;
`;

const HumidityText = styled.text`
    font-family: ${({ theme }) => theme.fonts.dseg7Modern};
    color: black;
    font-size: 44px;
    padding-top: 12px;
    padding-left: 2px;
`;

const HumidityPercentage = styled.text`
    font-family: ${({ theme }) => theme.fonts.dseg14Modern};
    color: black;
    font-size: 30px;
    align-self: flex-end;
    padding-bottom: 5px;
`;
