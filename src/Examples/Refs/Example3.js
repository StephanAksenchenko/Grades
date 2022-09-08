import { forwardRef } from "react";
import { useRef } from "react";

/**
 * Есть ли в данном коде ошибка?
 */
const App = () => {
  const ref = useRef();

  return <Component ref={ref} />;
};

export default App;

const Component = forwardRef(({ ref }) => {
  return <h1 ref={ref}>Hello</h1>;
});

Component.displayName = "Hello";
