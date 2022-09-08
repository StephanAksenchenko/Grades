import { createContext, useState } from "react";

/**
 * Какое будет значение контекста если нажать Increase?
 */
const GlobalContext = createContext({ count: 0 });
const LocalContext = createContext({ count: 0 });

const App = () => {
  const [count, setCount] = useState(0);
  const increaseByTwo = () => setCount((p) => p + 2);

  return (
    <GlobalContext.Provider value={{ count, setCount }}>
      <GlobalContext.Consumer>
        {({ count, setCount }) => (
          <LocalComp count={count} setCount={setCount} />
        )}
      </GlobalContext.Consumer>
      <button onClick={increaseByTwo}>IncreaseByTwo</button>
    </GlobalContext.Provider>
  );
};

const LocalComp = ({ count, setCount }) => {
  const increase = () => setCount((p) => p + 1);

  return (
    <LocalContext.Provider value={{ count, increase }}>
      <LocalContext.Consumer>
        {({ count, increase }) => (
          <>
            <div>{count}</div>
            <button onClick={increase}>Increase</button>
          </>
        )}
      </LocalContext.Consumer>
    </LocalContext.Provider>
  );
};

export default App;
