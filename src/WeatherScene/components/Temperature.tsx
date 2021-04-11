import { FunctionComponent } from 'react';
import styled from 'styled-components';

interface Props {
    className?: string;
    temperature: number;
    minimalTemperature: number;
    maximalTemperature: number;
}

export const Temperature: FunctionComponent<Props> = ({
    className,
    temperature,
    minimalTemperature,
    maximalTemperature,
}) => {
    return (
        <TemperatureContainer className={className}>
            <TemperatureText
                $isMinimal={Math.trunc(temperature) === Math.trunc(minimalTemperature)}
                $isMaximal={temperature === maximalTemperature}
            >
                {temperature}
            </TemperatureText>
        </TemperatureContainer>
    );
};

const TemperatureContainer = styled.div`
    height: 54px;
    width: 54px;
    border-radius: 27px;
    background-color: ${({ theme }) => theme.colors.primaryDarker};
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 4px;
`;

const TemperatureText = styled.h2<{ $isMinimal: boolean; $isMaximal: boolean }>`
    font-family: 'VisbyCF-Heavy';
    font-size: 28px;
    text-transform: uppercase;
    color: ${({ theme: { colors }, $isMinimal, $isMaximal }) =>
        $isMinimal ? colors.lightBlue : $isMaximal ? colors.profoundRed : colors.white};
    margin: 0;
`;
