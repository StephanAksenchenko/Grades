/**
 * Отмените отрисовку компонента Warning внутри него согласно условию condition.
 * Для наглядности приведен следующий код:
 */
const Warning = ({ isShown, children }) => {
  return <div className="warning">{children}</div>;
};

function App() {
  const warning = "Warning!";
  const condition = true;
  return (
    <div className="wrapper">
      <Warning isShown={condition}>{warning}</Warning>
    </div>
  );
}
