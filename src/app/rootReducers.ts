import { combineReducers } from 'redux';
import timeReducer from '../features/timer/timerSlice';

export const rootReducer = combineReducers({
  timer: timeReducer,
});
