import { forwardRef, useState, useRef, useImperativeHandle } from "react";

/**
 * Найдите ошибку в данном коде?
 */
const App = () => {
  const ref = useRef();
  const increase = () => ref.current.increase();

  return (
    <>
      <CounterForwardRef ref={ref} />
      <button onClick={increase}>Increase</button>
    </>
  );
};

const Counter = (props, ref) => {
  const counterRef = useRef();
  const [counter, setCounter] = useState(0);

  useImperativeHandle(
    ref,
    () => ({
      increase: () => setCounter(counter + 1),
    }),
    [counter]
  );

  return <div ref={counterRef}>{counter}</div>;
};

const CounterForwardRef = forwardRef(Counter);

export default App;
