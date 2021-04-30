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
    background-color: ${({ theme }) => theme.colors.note};
    border-radius: 12px;
`;
