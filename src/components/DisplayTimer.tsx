interface DisplayTimeInterface {
  totalSeconds: number;
}

const DisplayTime = (props: DisplayTimeInterface) => {
  const minutes = Math.floor(props.totalSeconds / 60);
  const seconds = props.totalSeconds % 60;

  const displayValue = `${minutes}m ${seconds.toString().padStart(2, '0')}s`;

  return <>{displayValue}</>;
};

export default DisplayTime;
