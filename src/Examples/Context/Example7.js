import { createContext, useState } from "react";

/**
 * Какие значения будут внутри h1, при перерендере?
 */
const Context = createContext();

const App = () => {
  const value = Math.random();
  const [count, setCount] = useState(0);
  const increase = () => setCount((p) => p + 1);

  return (
    <Context.Provider value={value}>
      <Context.Consumer>{(value) => <h1>{value}</h1>}</Context.Consumer>

      <button onClick={increase}>Increase</button>
    </Context.Provider>
  );
};

export default App;
