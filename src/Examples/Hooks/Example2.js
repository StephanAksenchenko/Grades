import { useEffect } from "react";

function pseudoHook() {
  useEffect(() => {
    console.log("hello");
  }, []);
}

const App = () => {
  pseudoHook();

  return <h1>Hello</h1>;
};

export default App;
