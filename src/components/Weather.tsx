import { useEffect, useState } from 'react';

import { getWeatherData } from '../api/weather';
import { WeatherData } from '../interface/weather';
import DisplayWeatherData from './DisplayWeatherData';

const Weather = () => {
  const [data, setData] = useState<WeatherData>();

  const getData = async () => {
    const weatherData = await getWeatherData();
    setData(weatherData);
  };

  useEffect(() => {
    getData();
  }, []);

  return <div>{data ? <DisplayWeatherData weatherData={data} /> : 'Loading'}</div>;
};

export default Weather;
