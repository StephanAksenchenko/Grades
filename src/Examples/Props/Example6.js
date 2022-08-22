/**
 * Что будет выведено на экран?
 */
const App = () => {
  const person = {
    name: "Bob",
    age: 26,
    position: "developer",
    specialization: "frontend",
    level: "middle",
  };

  return <Component level="senior" {...person} />;
};

const Component = ({ name, level = "junior", specialization, position }) => {
  return (
    <h1>
      {name} - {level} {specialization} {position}
    </h1>
  );
};

export default App;
