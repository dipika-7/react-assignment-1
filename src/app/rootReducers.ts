import { combineReducers } from 'redux';
import timeReducer from '../features/timer/timerSlice';
import weatheReducer from '../features/weather/weatherSlice';

export const rootReducer = combineReducers({
  timer: timeReducer,
  weather: weatheReducer,
});
