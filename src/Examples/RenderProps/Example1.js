import { memo, useCallback, useState, useMemo } from "react";

/**
 * Какие компоненты будут перерендериваться при нажатии кнопки Increase?
 */
const App = () => {
  const [counter, setCounter] = useState(0);
  const DataRender = useCallback((data) => <DataPreviewMemo data={data} />, []);

  return (
    <>
      <DataProvider render={DataRender} />
      <button onClick={() => setCounter(counter + 1)}>Increase</button>
    </>
  );
};

const DataProvider = ({ render }) => {
  const data = [1, 2, 3];
  return render(data);
};

const DataPreview = ({ data }) => (
  <ul>
    {data.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);
const DataPreviewMemo = memo(DataPreview);

export default App;
