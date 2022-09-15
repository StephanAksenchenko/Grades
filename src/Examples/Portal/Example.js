import { createPortal } from "react-dom";

const App = () => {
  return (
    <>
      <h1>Hello</h1>
      <Component />
    </>
  );
};

const Component = () => {
  return createPortal(<h1>Hello</h1>, document.getElementById("myportal"));
};

export default App;
