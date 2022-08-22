/**
 * Что выведется на экран?
 */
const App = () => {
  const text = "Дом&nbsp;&mdash; это родное место";

  return <Component text={text} />;
};

const Component = ({ text }) => {
  return <div>{text}</div>;
};

export default App;
