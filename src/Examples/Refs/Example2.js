import { useRef } from "react";

// /**
//  * Какое значение выведет console.log(ref) при первом рендере?
//  */
// const App = () => {
//   const ref = useRef(null);
//   console.log(ref);

//   return <button ref={ref}>Click</button>;
// };

// export default App;

export default function App() {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="App">
      <label htmlFor="name">Name: </label>
      <input id="name" ref={inputRef} />
    </div>
  );
}
