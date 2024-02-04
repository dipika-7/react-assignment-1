import '../App.css';

import { useEffect, useRef, useState } from 'react';

import { DEFAULT_START, INTERVAL } from '../constants/timer.constant';
import Button from './Button';
import DisplayTime from './DisplayTimer';
import TimerForm from './TimerForm';

const Timer = () => {
  const time = useRef(DEFAULT_START);
  const [count, setCount] = useState(time.current);
  const isStart = useRef<boolean>(false);
  const interval = useRef<number>(0);
  const resetRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (resetRef.current === null) return;

    resetRef.current.disabled = true;
  }, []);

  const handleStart = () => {
    if (isStart.current) return;

    interval.current = setInterval(() => {
      setCount((newCount) => newCount - 1);
    }, INTERVAL);
    isStart.current = true;

    if (resetRef.current === null) return;

    resetRef.current.disabled = true;
  };

  const handleStop = () => {
    if (!isStart.current) return;
    clearInterval(interval.current);
    isStart.current = false;

    if (resetRef.current === null) return;

    resetRef.current.disabled = false;
  };

  const handleReset = () => {
    setCount(time.current);
    clearInterval(interval.current);
    isStart.current = false;
  };

  const updateTime = (seconds: number) => {
    time.current = seconds;
    handleReset();
  };

  return (
    <div className="timer">
      <TimerForm updateTime={updateTime} />

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
