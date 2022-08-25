import {
  createContext,
  useEffect,
  useState,
  useContext,
  useCallback,
  useRef,
} from "react";

async function auth() {
  console.log("auth");
  return "Bob";
}

/**
 * Найдите проблему в данном коде?
 */
const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const [state, setState] = useState({
    name: "user",
  });

  return (
    <UserContext.Provider value={{ state, setState }}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => {
  const { state, setState } = useContext(UserContext);

  const changeName = (name) => {
    setState((prevState) => ({
      ...prevState,
      name,
    }));
  };

  return {
    changeName,
    state,
  };
};

const App = () => {
  return (
    <UserProvider>
      <Auth />
      <Avatar />
    </UserProvider>
  );
};

const Auth = () => {
  const { changeName, state } = useUser();
  const loading = useRef(false);

  useEffect(() => {
    const login = async () => {
      if (loading.current) {
        return;
      }

      loading.current = true;
      const user = await auth();
      changeName(user);
    };

    login();

    return () => (loading.current = false);
  }, [changeName, loading, state.name]);

  return null;
};

const Avatar = () => {
  const { state } = useUser();
  return <h1>Hello, {state.name}</h1>;
};

export default App;
