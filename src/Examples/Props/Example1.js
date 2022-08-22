import { useState } from "react";

/**
 * Что выведет приложение после 3 раз нажатия на кнопку
 */
const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <Component title="Hello" />
      <button onClick={() => setCounter(counter + 1)}>Click</button>
    </>
  );
};

const Component = ({ title }) => {
  title += " World";

  return <h1>{title}</h1>;
};

export default App;
