import { ApiData, CityWeather, Weather } from '../WeatherScene/interface';
import apiData from './rawData.json';

const refineWeatherData = (rawData: ApiData): Array<Weather> => {
    return rawData.data.daily.map((daily) => ({
        temperature: {
            morning: Math.round(daily.temp.morn),
            evening: Math.round(daily.temp.eve),
        },
        weatherIcon: daily.weather[0].icon,
        date: new Date(daily.dt * 1000),
    }));
};

const refineData = (rawDatas: Array<ApiData>): Array<CityWeather> => {
    const weatherDataByCity = rawDatas.map((rawData) => {
        const weatherDataForCity = refineWeatherData(rawData);
        return {
            lat: rawData.data.lat,
            lon: rawData.data.lon,
            cityName: rawData.cityName,
            weathers: weatherDataForCity,
        };
    });

    return weatherDataByCity;
};

export const useGetWeatherData = (): {
    minimalEveningTemperature: number;
    maximalEveningTemperature: number;
    minimalMorningTemperature: number;
    maximalMorningTemperature: number;
    weatherDataByCity: Array<CityWeather>;
} => {
    const weatherDataByCity = refineData(apiData);
    const eveningTemperaturesArray = weatherDataByCity.map((city) => city.weathers[1].temperature.evening);
    const morningTemperaturesArray = weatherDataByCity.map((city) => city.weathers[1].temperature.morning);

    const minimalEveningTemperature = Math.min(...eveningTemperaturesArray);
    const maximalEveningTemperature = Math.max(...eveningTemperaturesArray);
    const minimalMorningTemperature = Math.min(...morningTemperaturesArray);
    const maximalMorningTemperature = Math.max(...morningTemperaturesArray);
    return {
        weatherDataByCity,
        minimalEveningTemperature,
        maximalEveningTemperature,
        minimalMorningTemperature,
        maximalMorningTemperature,
    };
};
