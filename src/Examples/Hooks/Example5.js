import { useEffect, useRef, useState } from "react";

/**
 * Есть ли проблемы в данном коде?
 */
function useTimeout(callback, delay) {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;

    if (!delay && delay !== 0) {
      return;
    }

    const id = setTimeout(() => savedCallback.current(), delay);
    return () => clearTimeout(id);
  }, [callback, delay]);
}

const App = () => {
  const [visible, setVisible] = useState(true);
  const hide = () => {
    console.log("render");
    setVisible(false);
  };
  const show = () => setVisible(true);

  useTimeout(hide, 5000);

  return (
    <>
      {visible && <div>Visible</div>}
      <button onClick={show}>Show</button>
    </>
  );
};

export default App;
