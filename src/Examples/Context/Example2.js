import { createContext } from "react";

/**
 * Какое значение будет выведено в span?
 */
const Context = createContext("value");

const App = () => {
  return (
    <Context.Provider value={"value1"}>
      {(value) => (
        <Context.Provider value={"value2"}>
          <Context.Consumer>{(value) => <span>{value}</span>}</Context.Consumer>
        </Context.Provider>
      )}
    </Context.Provider>
  );
};

export default App;
