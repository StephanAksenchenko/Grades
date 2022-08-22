import { useRef } from "react";

/**
 * Что будет выведено на экран
 * после нажатия на кнопку Increase?
 */
const App = () => {
  const counter = useRef(0);

  return <Component counter={counter} />;
};

const Component = ({ counter }) => {
  const onClick = () => {
    counter.current = counter.current + 1;
  };

  return (
    <>
      <div>{counter.current}</div>
      <button onClick={onClick}>Increase</button>
    </>
  );
};

export default App;
