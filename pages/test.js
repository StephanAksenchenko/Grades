/**
 * Какие компоненты будут перерендериваться после изменения контекста?
 */

import { createContext, useContext, useState } from "react";

const Context = createContext({ name: "user" });

const App = () => {
  const [name, setName] = useState("User");

  return (
    <Context.Provider value={{ name, setName }}>
      <Welcome />
      <UserGreeting />
      <Login />
    </Context.Provider>
  );
};

const Welcome = () => <h1>Welcome to our test</h1>;

const UserGreeting = () => {
  const { name } = useContext(Context);

  return <p>Hello, {name}</p>;
};

const Login = () => {
  const { setName } = useContext(Context);

  const onClick = () => setName("Alex");

  return <button onClick={onClick}>Login</button>;
};

export default App;
