import React, { createContext, useContext, useState } from "react";

/**
 * Имеет ли смысл использовать MainMemo?
 */
const Context = createContext({});

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Context.Provider value={{ count, setCount }}>
        <MainMemo />
      </Context.Provider>
    </div>
  );
};

const Main = () => {
  return <Counter />;
};

const MainMemo = React.memo(Main);

const Counter = () => {
  const { count, setCount } = useContext(Context);

  return (
    <>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </>
  );
};

export default App;
