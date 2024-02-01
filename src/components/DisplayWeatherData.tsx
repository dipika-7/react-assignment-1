import { WeatherInterfaceProps, WeatherKeys } from '../interface/weather';

const DisplayWeatherData = (props: WeatherInterfaceProps) => {
  const { current, current_units } = props.weatherData;
  return (
    <div className="list">
      <h1>Weather</h1>
      {Object.entries(current).map(([key, value]) => {
        const dataKey = key as WeatherKeys;
        return (
          <div
            className="list-item"
            key={key}
          >{`${key}: ${value}${current_units[dataKey]}`}</div>
        );
      })}
    </div>
  );
};

export default DisplayWeatherData;
