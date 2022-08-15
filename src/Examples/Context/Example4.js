import React, { useContext, createContext, useState } from "react";

/**
 * Какие компоненты будут перерендериваться
 */
const Context = createContext({});

const App = () => {
  const [state, setState] = useState(0);

  return (
    <Wrapper>
      <Context.Provider value={{ state, setState }}>
        <Info />
        <InfoMemo />
        <IncreaseButton />
        <IncreaseButtonMemo />
      </Context.Provider>
    </Wrapper>
  );
};

const IncreaseButton = () => {
  const { state, setState } = useContext(Context);
  const increase = () => setState(state + 1);

  return <button onClick={increase}>Increase</button>;
};

const IncreaseButtonMemo = React.memo(IncreaseButton);

const Info = () => {
  return <p>Click the button</p>;
};

const InfoMemo = React.memo(Info);

const Wrapper = ({ children }) => <div className="wrapper">{children}</div>;

export default App;
