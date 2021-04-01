import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { ThermometerFirstRow } from './ThermometerFirstRow';
import { ThermometerSecondRow } from './ThermometerSecondRow';

interface Props {
    className?: string;
}

export const Thermometer: FunctionComponent<Props> = ({ className }) => {
    return (
        <>
            <Container className={className}>
                <Screen>
                    <ThermometerFirstRow />
                    <ThermometerSecondRow />
                </Screen>
            </Container>
        </>
    );
};

const Container = styled.div`
    border-radius: 10%;
    background-color: white;
    position: relative;
`;

const Screen = styled.div`
    height: 66%;
    width: 66%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    background-color: #7a7966;
    border-radius: 5%;
    padding: 40px 20px;
    display: flex;
    flex-direction: column;
    text-align: center;
    box-shadow: inset 0px 0px 20px 10px rgba(0, 0, 0, 0.3);
`;
