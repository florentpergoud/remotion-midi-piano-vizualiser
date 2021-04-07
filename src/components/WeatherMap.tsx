import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

interface Props {
    className?: string;
}

export const WeatherMap: FunctionComponent<Props> = ({ className }) => {
    return (
        <>
            <Container className={className} />
        </>
    );
};

const Container = styled.div``;
