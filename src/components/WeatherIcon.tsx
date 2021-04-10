import { FunctionComponent } from 'react';
import { Img } from 'remotion';

const ICON_SIZE = 90;

interface Props {
    className?: string;
    icon: string;
}

export const WeatherIcon: FunctionComponent<Props> = ({ className, icon }) => {
    return (
        <Img
            className={className}
            src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
            height={ICON_SIZE}
            width={ICON_SIZE}
        />
    );
};
