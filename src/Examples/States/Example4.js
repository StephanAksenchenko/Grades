/**
 * Основываясь на приведенном фрагменте кода
 * ответьте - как в обработчике события изменить
 * значение переменной состояния, чтобы при вводе
 * в поле сообщение об ошибке исчезало?
 */
const MyComponent = () => {
  const [isError, setIsError] = useState(true);
  return (
    <div>
      <input
        // Обработчик изменения поля
        onChange={() => {}}
      ></input>
      {isError && <p className="errorMessage">This field can not be empty!</p>}
    </div>
  );
};
