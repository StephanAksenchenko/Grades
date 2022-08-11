import { useState } from "react";

const Comp1 = () => {
  /**
   * Как создать несколько состояний в компоненте?
   */

  //вариант 1
  const [state1, setState1] = useState(1);
  const [state2, setState2] = useState(2);

  //вариант 2
  const state = { state1: 1, state2: state2 };

  //вариант 3
  useState({ state1: 1, state2: 2 });

  //вариант 4
  setState1({ state1: 1, state2: 2 });
};
