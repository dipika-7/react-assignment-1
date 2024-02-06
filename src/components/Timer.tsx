import { useEffect, useRef, useState } from 'react';

import { DEFAULT_START, INTERVAL } from '../constants/timer.constant';
import Button from './Button';
import DisplayTime from './DisplayTimer';
import TimerForm from './TimerForm';
import { useAppSelector } from '../hooks/useAppSelector';
import {
  resetTime,
  selectTimerIsStart,
  selectTimerValue,
  setTimeStart,
  setTimeStop,
  timeDecrement,
  updateTime,
} from '../features/timer/timerSlice';
import { useAppDispatch } from '../hooks/useAppDispatch';

const Timer = () => {
  const interval = useRef<number>(0);
  const resetRef = useRef<HTMLButtonElement | null>(null);

  const count = useAppSelector(selectTimerValue);
  const isStart = useAppSelector(selectTimerIsStart);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (resetRef.current === null) return;

    resetRef.current.disabled = true;
  }, []);

  const handleStart = () => {
    interval.current = setInterval(() => {
      dispatch(timeDecrement());
    }, INTERVAL);
    dispatch(setTimeStart());

    if (resetRef.current === null) return;

    resetRef.current.disabled = true;
  };

  const handleStop = () => {
    if (!isStart) return;

    clearInterval(interval.current);
    dispatch(setTimeStop());

    if (resetRef.current === null) return;

    resetRef.current.disabled = false;
  };

  const handleReset = () => {
    dispatch(resetTime());
    clearInterval(interval.current);
  };

  const handleUpdateTime = (seconds: number) => {
    dispatch(updateTime(seconds));
    handleReset();
  };

  return (
    <div className="timer">
      <TimerForm updateTime={handleUpdateTime} />

      <div className="timer-display">
        <h1>
          <DisplayTime totalSeconds={count} />
        </h1>

        <div className="group-buttons">
          <Button value="Start" handleClick={handleStart} />

          <Button value="Stop" handleClick={handleStop} />

          <Button value="Reset" handleClick={handleReset} buttonRef={resetRef} />
        </div>
      </div>
    </div>
  );
};

export default Timer;
