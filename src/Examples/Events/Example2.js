/**
 * Как предотвратить вызов обработчика события по умолчанию в рамках React?
 * Опирайтесь на код предоставленный ниже для наглядности:
 */
export default function App() {
  const handleSubmit = (e) => {};
  return (
    <div className="wrapper">
      <h1>Personal Info</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>Given Name</p>
            <input name="name" />
          </label>
          <label>
            <p>Family Name</p>
            <input name="famName" />
          </label>
        </fieldset>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
