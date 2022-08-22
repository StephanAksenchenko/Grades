/**
 * Что выведится на экран?
 */
const App = () => {
  const text1 = "Hello";
  const text2 = "World";

  // eslint-disable-next-line react/jsx-no-duplicate-props
  return <Component text={text1} text={text2} />;
};

const Component = ({ text }) => {
  return <div>{text}</div>;
};

export default App;
