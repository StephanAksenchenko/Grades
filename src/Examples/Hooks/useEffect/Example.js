import { useEffect, useLayoutEffect } from "react";

/**
 * Что выведется в консоль?
 */
const App = () => {
  console.log("begin");
  useEffect(() => console.log("useEffect"));
  useLayoutEffect(() => console.log("useLayoutEffect"));

  console.log("end");
  return <div>Hello</div>;
};

export default App;
