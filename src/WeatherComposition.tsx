import React, { FunctionComponent } from 'react';
import { Sequence } from 'remotion';
import { DisplayType } from './WeatherScene/interface';
import { WeatherScene } from './WeatherScene/WeatherScene';

export const WeatherComposition: FunctionComponent = () => {
    return (
        <>
            <Sequence from={0} durationInFrames={100} name="Forecast">
                <WeatherScene displayType={DisplayType.FORECAST} />
            </Sequence>
        </>
    );
};
