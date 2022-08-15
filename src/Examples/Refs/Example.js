import {
  forwardRef,
  useState,
  useRef,
  useImperativeHandle,
  useEffect,
} from "react";

const App = () => {
  const ref = useRef();

  const logging = () => {
    ref.current.log();
    ref.current.increase();
  };

  useEffect(() => console.log(ref));

  return (
    <>
      <CounterForwardRef ref={ref} />
      <button onClick={logging}>Click to log</button>
    </>
  );
};

const Counter = (props, ref) => {
  const counterRef = useRef();
  const [counter, setCounter] = useState(0);

  useImperativeHandle(
    ref,
    () => ({
      log: () => console.log("hello"),
      increase: () => setCounter(counter + 1),
    }),
    [counter]
  );

  return <div ref={counterRef}>{counter}</div>;
};

const CounterForwardRef = forwardRef(Counter);

export default App;
