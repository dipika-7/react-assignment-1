import { useLoaderData } from 'react-router-dom';

import { WeatherData } from '../interface/weather';
import DisplayWeatherData from './DisplayWeatherData';

const Weather = () => {
  const data = useLoaderData() as WeatherData;

  return <div>{data ? <DisplayWeatherData weatherData={data} /> : 'Loading'}</div>;
};

export default Weather;
