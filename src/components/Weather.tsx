import { useEffect, useState } from 'react';

import DisplayWeatherData from './DisplayWeatherData';
import { useAppSelector } from '../hooks/useAppSelector';
import { fetchWeatherData, selectWeatherData } from '../features/weather/weatherSlice';
import { useAppDispatch } from '../hooks/useAppDispatch';

const Weather = () => {
  // const [data, setData] = useState<WeatherData>();
  const data = useAppSelector(selectWeatherData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchWeatherData());
  }, []);

  return (
    <div>{data ? <DisplayWeatherData weatherData={data} /> : <h3>Loading...</h3>}</div>
  );
};

export default Weather;
