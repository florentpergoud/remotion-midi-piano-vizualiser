import React from 'react';
import {AbsoluteFill, useCurrentFrame, useVideoConfig} from 'remotion';
import styled from 'styled-components';

export const ThermometerScene: React.FC = () => {
	const frame = useCurrentFrame();
	const videoConfig = useVideoConfig();

	return (
		<Container>
			<Background />
		</Container>
	);
};

const Container = styled.div``;

const Background = styled(AbsoluteFill)`
	background-color: grey;
`;
