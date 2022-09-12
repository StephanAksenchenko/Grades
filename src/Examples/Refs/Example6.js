import { useContext, useRef, useState } from "react";
import { createContext } from "react";

/**
 * Будет ли данный код работать корректно.
 * При нажании на кнопку Logout, показываем, что пользователь "user"?
 */
function useForceUpdate() {
  const [value, setValue] = useState(0);
  const update = () => setValue(value + 1);
  return update;
}

const UserContext = createContext("user");

const App = () => {
  const user = useRef("Bob");
  const setUser = (name) => {
    user.current = name;
  };

  return (
    <UserContextProvider user={{ user, setUser }}>
      <Avatar />
    </UserContextProvider>
  );
};

const UserContextProvider = ({ user, children }) => {
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

const Avatar = () => {
  const { user, setUser } = useContext(UserContext);
  const update = useForceUpdate();

  const logout = () => {
    setUser("user");
    update();
  };

  return (
    <>
      <h1>{user.current}</h1>
      <button onClick={logout}>Logout</button>
    </>
  );
};

export default App;
