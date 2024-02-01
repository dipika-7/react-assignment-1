import axios from 'axios';

export const getWeatherData = async () => {
  const apiData = await axios.get(
    'https://api.open-meteo.com/v1/forecast?latitude=27.673&longitude=85.43&current=temperature_2m,relative_humidity_2m,wind_speed_10m,wind_direction_10m&format=json&timeformat=unixtime',
  );
  return apiData.data;
};
