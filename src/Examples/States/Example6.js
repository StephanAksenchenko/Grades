import { useState } from "react";

const Comp1 = () => {
  const [state, setState] = useState(false);

  /**
   * Как получить доступ к значению состояния на предыдущем рендере?
   */

  // Вариант 1
  setState((state, index) => {
    return state[index - 1].value;
  });

  // Вариант 2
  setState((old) => {
    return old;
  });

  // Вариант 3
  setState((value) => {
    return value.old;
  });

  // Вариант 4
  usePreviousState(state);
};
