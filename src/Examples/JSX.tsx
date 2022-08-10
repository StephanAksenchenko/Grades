/**
 * Корректна ли такая запись?
 */
const Component1 = () => {
  return <div />;
};

/**
 * Как правильно вставить классовый атрибут
 */
const Component2 = () => {
  return <div /* ключевое слово */>Мне нужен класс</div>;
};

/**
 * Как правильно вставить tabindex атрибут
 */
const Component3 = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
      <a href="/" /* здесь атрибут */>Logotype</a>
    </nav>
  );
};

export { Component1, Component2, Component3 };
