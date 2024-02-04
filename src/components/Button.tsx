import React from 'react';

interface ButtonInterface {
  value: string;
  handleClick: () => void;
  buttonRef?: React.MutableRefObject<HTMLButtonElement | null>;
}

const Button = (props: ButtonInterface) => {
  return (
    <>
      <button type="submit" ref={props.buttonRef} onClick={props.handleClick}>
        {props.value}
      </button>
    </>
  );
};

export default Button;
