import { ApiData, CityWeather, Weather } from '../WeatherScene/interface';
import apiData from './rawData.json';

const refineWeatherData = (rawData: ApiData): Array<Weather> => {
    return rawData.data.daily.map((daily) => ({
        temerature: {
            morning: daily.temp.morn,
            evening: daily.temp.eve,
        },
        weatherIcon: daily.weather[0].icon,
        date: new Date(daily.dt * 1000),
    }));
};

const refineData = (rawDatas: Array<ApiData>): Array<CityWeather> => {
    return rawDatas.map((rawData) => {
        const weatherDataForCity = refineWeatherData(rawData);
        return {
            lat: rawData.data.lat,
            lon: rawData.data.lon,
            cityName: rawData.cityName,
            weathers: weatherDataForCity,
        };
    });
};

export const useGetWeatherData = (): { weatherDataByCity: Array<CityWeather> } => {
    const data = refineData(apiData);

    return { weatherDataByCity: data };
};
