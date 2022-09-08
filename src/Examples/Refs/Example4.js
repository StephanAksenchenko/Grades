import { forwardRef, useRef } from "react";

/**
 * Есть ли в данном коде ошибка
 */
const App = () => {
  const ref = useRef();

  const retriveData = () => {
    console.dir(ref.current.dataset.title);
  };

  return (
    <>
      <Component ref={ref} />
      <button onClick={retriveData}>Retrive</button>
    </>
  );
};

const Component = forwardRef((props, ref) => {
  return (
    <h1 ref={ref} data-title="Very interesting">
      Hello
    </h1>
  );
});

export default App;

Component.displayName = "Component";
