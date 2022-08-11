/**
 * Какое значение выведет React в span при первом рендере?
 */

import { createContext, useContext } from "react";

const Context = createContext("значение1");

const App = () => {
  const ctx = useContext(Context);

  return (
    <Context.Provider value={"значение2"}>
      <Context.Consumer>{(value) => <span>{value}</span>}</Context.Consumer>
    </Context.Provider>
  );
};

export default App;
