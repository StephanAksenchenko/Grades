/**
 * Основываясь на приведенном фрагменте определите,
 * что именно будет отрисовано в браузере?
 */
function App() {
  const messages = [];
  return (
    <div>
      {messages.length && (
        <>
          <p>Your messages: </p>
          {messages.map((item, i) => (
            <p key={i}>{item}</p>
          ))}
        </>
      )}
    </div>
  );
}

export default App;
