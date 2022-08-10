/**
 * Корректна ли такая запись ?
 */
const comp = () => <div>Hello World</div>;
const Comp = comp;

const App = () => {
  return <Comp />;
};

export default App;
