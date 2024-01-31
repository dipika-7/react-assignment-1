import { FormEvent, useRef } from 'react';

interface TimerFormInterface {
  updateTime: (seconds: number) => void;
}

const TimerForm = (props: TimerFormInterface) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!inputRef.current) return;

    if (!inputRef.current?.value) return;

    props.updateTime(parseInt(inputRef.current.value));

    inputRef.current.value = '';
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="number"
          name="usersecond"
          placeholder="Enter time in seconds"
          min={0}
          ref={inputRef}
          className="input-field"
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default TimerForm;
