export interface ApiWeather {
    description: string;
    icon: string;
    id: number;
    main: string;
}

export interface ApiDailyForecast {
    clouds: number;
    dew_point: number;
    dt: number;
    feels_like: { day: number; night: number; eve: number; morn: number };
    humidity: number;
    pop: number;
    pressure: number;
    sunrise: number;
    sunset: number;
    temp: { day: number; min: number; max: number; night: number; eve: number; morn: number };
    uvi: number;
    weather: Array<ApiWeather>;
    wind_deg: number;
    wind_speed: number;
}

export interface ApiData {
    cityName: string;
    data: {
        daily: Array<ApiDailyForecast>;
        lat: number;
        lon: number;
    };
}

export interface Weather {
    date: Date;
    temperature: {
        morning: number;
        evening: number;
    };
    weatherIcon: string;
}

export interface CityWeather {
    cityName: string;
    lat: number;
    lon: number;
    weathers: Array<Weather>;
}

export enum DisplayType {
    FORECAST = 'FORECAST',
    MORNING_TEMPERATURE = 'MORNING_TEMPERATURE',
    AFTERNOON_TEMPERATURE = 'AFTERNOON_TEMPERATURE',
}
