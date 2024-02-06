import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getWeatherData } from '../../api/weather';
import { AxiosError } from 'axios';
import { WeatherData } from '../../interface/weather';
import { RootState } from '../../app/store';

export const fetchWeatherData = createAsyncThunk(
  'weather/fetchWeatherApi',
  async (_, { rejectWithValue }) => {
    try {
      const weatherApiData = await getWeatherData();
      const weatherData = {
        current: weatherApiData.current,
        current_units: weatherApiData.current_units,
      };
      return weatherData;
    } catch (e) {
      if (e instanceof AxiosError) {
        return rejectWithValue(e.message);
      }
    }
  },
);

interface weatherState {
  data: WeatherData | null;
  status: 'pending' | 'fulfilled' | 'rejected';
  message: string;
}

const initialState: weatherState = {
  data: null,
  status: 'pending',
  message: '',
};

const weather = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchWeatherData.pending, (state, action) => {
      state.status = 'pending';
    });
    builder.addCase(fetchWeatherData.fulfilled, (state, action) => {
      state.status = 'fulfilled';
      state.data = action.payload as WeatherData;
    });
    builder.addCase(fetchWeatherData.rejected, (state, action) => {
      state.status = 'rejected';
      state.message = action.payload as string;
    });
  },
});

export const selectWeatherData = (state: RootState) => state.weather.data;
export const selectWeatherStatus = (state: RootState) => state.weather.status;
export const selectWeatherMessage = (state: RootState) => state.weather.message;

export default weather.reducer;
