import { ApiData, CityWeather, Weather } from '../WeatherScene/interface';
import apiData from './rawData.json';

const refineWeatherData = (rawData: ApiData): Array<Weather> => {
    return rawData.data.daily.map((daily) => ({
        temerature: {
            morning: Math.trunc(daily.temp.morn),
            evening: Math.trunc(daily.temp.eve),
        },
        weatherIcon: daily.weather[0].icon,
        date: new Date(daily.dt * 1000),
    }));
};

const refineData = (
    rawDatas: Array<ApiData>,
): {
    minimalEveningTemperature: number;
    maximalEveningTemperature: number;
    minimalMorningTemperature: number;
    maximalMorningTemperature: number;
    weatherDataByCity: Array<CityWeather>;
} => {
    const eveningTemperaturesArray = rawDatas.map((rawData) => Math.trunc(rawData.data.daily[0].temp.eve));
    const morningTemperaturesArray = rawDatas.map((rawData) => Math.trunc(rawData.data.daily[0].temp.morn));
    const minimalEveningTemperature = Math.min(...eveningTemperaturesArray);
    const maximalEveningTemperature = Math.max(...eveningTemperaturesArray);
    const minimalMorningTemperature = Math.min(...morningTemperaturesArray);
    const maximalMorningTemperature = Math.max(...morningTemperaturesArray);
    const weatherDataByCity = rawDatas.map((rawData) => {
        const weatherDataForCity = refineWeatherData(rawData);
        return {
            lat: rawData.data.lat,
            lon: rawData.data.lon,
            cityName: rawData.cityName,
            weathers: weatherDataForCity,
        };
    });

    return {
        weatherDataByCity,
        minimalEveningTemperature,
        maximalEveningTemperature,
        minimalMorningTemperature,
        maximalMorningTemperature,
    };
};

export const useGetWeatherData = (): {
    minimalEveningTemperature: number;
    maximalEveningTemperature: number;
    minimalMorningTemperature: number;
    maximalMorningTemperature: number;
    weatherDataByCity: Array<CityWeather>;
} => {
    return {
        ...refineData(apiData),
    };
};
