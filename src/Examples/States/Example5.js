/**
 * По данному фрагменту кода установите что именно будет
 * отрисовано на странице после X нажатий на кнопку “Run”?
 */
function CountWithoutEffect() {
  const [counter, setCounter] = useState(0);
  const [doubleCounter, setDoubleCounter] = useState(counter * 2);

  const handleCount = () => {
    setCounter(counter + 1);
    setDoubleCounter(counter * 2);
  };
  return (
    <div className="App">
      <div>{counter}</div>
      <div>{doubleCounter}</div>
      <button onClick={handleCount}>Run</button>
    </div>
  );
}

export default CountWithoutEffect;
