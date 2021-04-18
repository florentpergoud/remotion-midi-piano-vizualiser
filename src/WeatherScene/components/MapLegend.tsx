import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { useTranslate } from './useTranslate';

const title = 'Météo de demain';

interface Props {
    className?: string;
    subtitle: string;
}

export const MapLegend: FunctionComponent<Props> = ({ className, subtitle }) => {
    const translateX = useTranslate({
        from: -1000,
        to: 0,
    });

    return (
        <Container className={className}>
            <GradientContainer $translateX={translateX}>
                <TitleContainer>
                    <Text>{title}</Text>
                </TitleContainer>
            </GradientContainer>
            <Subtitle>{subtitle}</Subtitle>
        </Container>
    );
};

const Container = styled.div``;

const GradientContainer = styled.div<{ $translateX: number }>`
    background: ${({ theme: { colors } }) => `linear-gradient(90deg, ${colors.red} 0%, ${colors.primaryLighter} 100%)`};
    padding: 10px;
    padding-left: 0px;
    transform: translateX(${({ $translateX }) => `${$translateX}px`});
    width: fit-content;
    box-shadow: 10px 10px 12px rgba(0, 0, 0, 0.8);
`;

const TitleContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.primaryDarker};
    padding: 14px 40px;
    padding-bottom: 20px;
    width: fit-content;
`;

const Text = styled.h1`
    font-family: 'VisbyCF-Heavy';
    font-size: 40px;
    text-transform: uppercase;
    color: white;
    margin: 0;
`;
const Subtitle = styled(Text)`
    font-size: 34px;
    padding-left: 40px;
    padding-top: 4px;
    text-shadow: 7px 7px 7px rgba(0, 0, 0, 0.9);
`;
