/**
 * Что будет выведено внутри Component?
 */
const App = () => {
  const props = {
    title: "Hello world",
    description: "This is awesome world",
  };

  return <Component props={props} />;
};

const Component = ({ title }) => {
  return <div>{title}</div>;
};

export default App;
