import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { useTranslate } from './useTranslate';

interface Props {
    className?: string;
    title: string;
}

export const MapLegend: FunctionComponent<Props> = ({ className, title }) => {
    const translateX = useTranslate({
        from: -1000,
        to: 0,
    });

    return (
        <GradientContainer className={className} $translateX={translateX}>
            <Container>
                <Text>{title}</Text>
            </Container>
        </GradientContainer>
    );
};

const GradientContainer = styled.div<{ $translateX: number }>`
    background: linear-gradient(90deg, rgba(202, 23, 96, 1) 0%, rgba(94, 89, 217, 1) 100%);
    padding: 10px 0px;
    padding-right: 10px;
    transform: translateX(${({ $translateX }) => `${$translateX}px`});
`;

const Container = styled.div`
    background-color: ${({ theme }) => theme.colors.primaryDarker};
    padding: 18px 20px;
    padding-bottom: 28px;
    width: fit-content;
`;

const Text = styled.h1`
    font-family: 'VisbyCF-Heavy';
    font-size: 44px;
    text-transform: uppercase;
    color: white;
    padding: 0;
    margin: 0;
`;
