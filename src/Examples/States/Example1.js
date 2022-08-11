/**
 * Какое значение будет у переменной counter после
 * трех нажатий кнопки “Увеличить”? (см. приведенный фрагмент кода):
 */

const Button = ({ counter, children }) => {
  const handler = () => {
    counter = counter + 1;
  };
  return <button onClick={handler}>{children}</button>;
};

export default function App() {
  const counter = 0;
  return (
    <div>
      <Button counter={counter}>Увеличить</Button>
      <p>{counter}</p>
    </div>
  );
}
