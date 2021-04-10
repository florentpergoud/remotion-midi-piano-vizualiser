import { FunctionComponent } from 'react';
import { icon01d } from './icons/icon01d';
import { icon02d } from './icons/icon02d';
import { icon02n } from './icons/icon02n';
import { icon03d } from './icons/icon03d';
import { icon03n } from './icons/icon03n';
import { icon04d } from './icons/icon04d';
import { icon04n } from './icons/icon04n';
import { icon09d } from './icons/icon09d';
import { icon09n } from './icons/icon09n';
import { icon10d } from './icons/icon10d';
import { icon10n } from './icons/icon10n';
import { icon11d } from './icons/icon11d';
import { icon11n } from './icons/icon11n';
import { icon13d } from './icons/icon13d';
import { icon13n } from './icons/icon13n';
import { icon50d } from './icons/icon50d';
import { icon50n } from './icons/icon50n';

interface Props {
    className?: string;
    icon: string;
}

const getWeatherIconFromName = (iconName: string): FunctionComponent => {
    if (iconName === '01d') return icon01d;
    if (iconName === '02d') return icon02d;
    if (iconName === '02n') return icon02n;
    if (iconName === '03d') return icon03d;
    if (iconName === '03n') return icon03n;
    if (iconName === '04d') return icon04d;
    if (iconName === '04n') return icon04n;
    if (iconName === '09d') return icon09d;
    if (iconName === '09n') return icon09n;
    if (iconName === '10d') return icon10d;
    if (iconName === '10n') return icon10n;
    if (iconName === '11d') return icon11d;
    if (iconName === '11n') return icon11n;
    if (iconName === '13d') return icon13d;
    if (iconName === '13n') return icon13n;
    if (iconName === '50d') return icon50d;
    return icon50n;
};

export const WeatherIcon: FunctionComponent<Props> = ({ className, icon }) => {
    const WeatherIcon = getWeatherIconFromName(icon) as FunctionComponent<{ className?: string; filled?: boolean }>;
    return <WeatherIcon filled className={className} />;
};
