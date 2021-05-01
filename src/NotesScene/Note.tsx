import { FunctionComponent } from 'react';
import styled from 'styled-components';

interface Props {
    bottom: string;
    height: string;
}
export const Note: FunctionComponent<Props> = ({ bottom, height }) => {
    return <Container $bottom={bottom} $height={height} />;
};

const Container = styled.div<{ $bottom: string; $height: string }>`
    position: absolute;
    height: ${({ $height }) => $height};
    width: 100%;
    bottom: ${({ $bottom }) => $bottom};
    left: 0;
    background-color: ${({ theme }) => theme.colors.rightHandNote};
    border-radius: 12px;
    box-shadow: inset 10px 6px 24px 0px rgba(255, 255, 255, 0.3), inset -10px -6px 24px 0px rgba(0, 0, 0, 0.5),
        0.4em 0.4em rgba(0, 0, 0, 0.4);
`;
