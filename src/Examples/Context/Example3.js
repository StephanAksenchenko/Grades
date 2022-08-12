import { createContext, useState } from "react";

/**
 * App отрисовывает два счётчика, у которых есть span,
 * для отображения значения счётчика и есть кнопка, увеличивающая значение счётчиа на один.
 * Если у каждого счётчика нажать один раз кнопку Increment, каковы будут значения счётчика
 *
 */
const Context = createContext("value");
Context.displayName = "Lol";

const App = () => {
  return (
    <>
      <Counter />
      <Counter />
    </>
  );
};

const Counter = () => {
  const [state, setState] = useState(0);
  const increment = () => setState(state + 1);

  return (
    <>
      <Context.Provider value={{ state, setState }}>
        <Context.Consumer>
          {(value) => <span>{value.state}</span>}
        </Context.Consumer>
      </Context.Provider>
      <button onClick={increment}>Increment</button>
    </>
  );
};

export default App;
