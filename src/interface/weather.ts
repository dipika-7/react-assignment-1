export interface WeatherData {
  current: {
    interval: number;
    relative_humidity_2m: number;
    temperature_2m: number;
    time: number;
    wind_direction_10m: number;
    wind_speed_10m: number;
  };
  current_units: {
    interval: string;
    relative_humidity_2m: string;
    temperature_2m: string;
    time: string;
    wind_direction_10m: string;
    wind_speed_10m: string;
  };
}

export interface WeatherInterfaceProps {
  weatherData: WeatherData;
}

export type WeatherKeys = keyof WeatherData['current'];
