import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface TimerState {
  defaultValue: number;
  value: number;
  isStart: boolean;
}

const initialState: TimerState = {
  defaultValue: 120,
  value: 120,
  isStart: false,
};

const timer = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    timeDecrement: (state) => {
      if (state.isStart) {
        state.value = state.value - 1;

        if (state.value <= 0) {
          state.value = 0;
          state.isStart = false;
        }
      }
    },
    setTimeStart: (state) => {
      state.isStart = true;
    },
    setTimeStop: (state) => {
      state.isStart = false;
    },
    resetTime: (state) => {
      state.value = state.defaultValue;
      state.isStart = false;
    },
    updateTime: (state, actions: PayloadAction<number>) => {
      state.value = actions.payload;
      state.defaultValue = actions.payload;
    },
  },
});

export const { timeDecrement, setTimeStart, setTimeStop, resetTime, updateTime } =
  timer.actions;

export const selectTimerValue = (state: RootState) => state.timer.value;
export const selectTimerIsStart = (state: RootState) => state.timer.isStart;

export default timer.reducer;
