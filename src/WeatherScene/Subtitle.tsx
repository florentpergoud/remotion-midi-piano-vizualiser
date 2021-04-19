import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { useTranslate } from './components/useTranslate';

interface Props {
    subtitle: string;
}

export const Subtitle: FunctionComponent<Props> = ({ subtitle }) => {
    const translateY = useTranslate({
        from: -100,
        to: 0,
    });
    return <Text $translateY={translateY}>{subtitle}</Text>;
};

const Text = styled.h2<{ $translateY: number }>`
    font-family: 'VisbyCF-Heavy';
    text-transform: uppercase;
    color: white;
    margin: 0;
    position: absolute;
    font-size: 34px;
    left: 40px;
    top: 130px;
    text-shadow: 7px 7px 7px rgba(0, 0, 0, 0.9);
    transform: translateY(${({ $translateY }) => `${$translateY}px`});
`;
