import { useState } from "react";

/**
 * Какое будет значение после нажатия на кнопку Doublt increase
 */
const App = () => {
  return <Counter />;
};

const Counter = () => {
  const [count, setCount] = useState(0);

  const doubleIncrease = () => {
    setCount(count + 1);
    setCount(count + 1);
  };

  return (
    <div>
      <div>{count}</div>
      <button onClick={doubleIncrease}>Double increase</button>
    </div>
  );
};

export default App;
