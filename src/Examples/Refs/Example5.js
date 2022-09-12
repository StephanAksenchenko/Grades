import { forwardRef } from "react";
import { useState, useRef } from "react";

/**
 * Какое значение будет выведено внутри PreviousValue
 * после двух нажатий на кнопку Increase
 */
const App = () => {
  const prevValue = useRef(0);

  return (
    <>
      <PreviousValue value={prevValue.current} />
      <Counter ref={prevValue} />
    </>
  );
};

const PreviousValue = ({ value }) => <div>Previous value: {value}</div>;

const Counter = forwardRef((_, prevValue) => {
  const [value, setValue] = useState(0);

  const increase = () => {
    prevValue.current = value;
    setValue(value + 1);
  };

  return (
    <>
      <div>CurrentValue: {value}</div>
      <button onClick={increase}>Increase</button>
    </>
  );
});

Counter.displayName = "Counter";

export default App;
