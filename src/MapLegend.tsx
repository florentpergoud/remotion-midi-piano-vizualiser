import { FunctionComponent } from 'react';
import styled from 'styled-components';

interface Props {
    className?: string;
}

export const MapLegend: FunctionComponent<Props> = ({ className }) => {
    return (
        <GradientContainer className={className}>
            <Container>
                <Text>Prévisions du matin</Text>
            </Container>
        </GradientContainer>
    );
};

const GradientContainer = styled.div`
    background: linear-gradient(90deg, rgba(202, 23, 96, 1) 0%, rgba(94, 89, 217, 1) 100%);
    padding: 10px 0px;
    padding-right: 10px;
`;

const Container = styled.div`
    background-color: ${({ theme }) => theme.colors.primaryDarker};
    padding: 18px 20px;
    padding-bottom: 28px;
    width: fit-content;
`;

const Text = styled.text`
    font-family: 'VisbyCF-Heavy';
    font-size: 44px;
    text-transform: uppercase;
    color: white;
    padding: 0;
    margin: 0;
`;
