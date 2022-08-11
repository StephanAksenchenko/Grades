/**
 * Добавьте обработчик удаления продукта.
 * Для наглядности приведен следующий код:
 */
function App() {
  const products = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
  const handleRemove = () => {};
  return (
    <div className="App">
      {products.map((product) => {
        return <button key={product.id}>Удалить #{product.id}</button>;
      })}
    </div>
  );
}
export default App;
