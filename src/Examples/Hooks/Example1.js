function useRouter() {
  return {
    path: "/",
  };
}

const App = () => {
  const onClick = () => {
    const { path } = useRouter();
    console.log(`Go to path ${path}`);
  };

  return <button onClick={onClick}>Go</button>;
};

export default App;
