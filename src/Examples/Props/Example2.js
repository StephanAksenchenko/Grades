/**
 * Какое значение выведится на экран?
 */
const App = () => {
  const title = "Hello world";

  return <Component title />;
};

const Component = ({ title }) => {
  return <div className="component">{title}</div>;
};

export default App;
