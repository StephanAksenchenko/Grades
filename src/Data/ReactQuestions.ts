import { Question } from "Entities/Question";

export const questions: Question[] = [
  {
    id: 1,
    type: "single",
    body: "Выберите правильное утверждения:",
    tags: ["react", "junior"],
    availableAnswer: [
      { id: 1, content: "React – это библиотека" },
      { id: 2, content: "React – это фреймворк." },
    ],
    rightAnswer: 1,
  },
  {
    id: 2,
    type: "multiple",
    body: "Выберите правильное утверждения:",
    tags: ["react", "junior", "jsx"],
    availableAnswer: [
      { id: 1, content: "JSX – расширение языка JS" },
      { id: 2, content: "React нельзя использовать без JSX" },
      { id: 3, content: "JSX-теги могут содержать дочерние элементы" },
      {
        id: 4,
        content: "JSX допускает использование любых корректных JS выражений",
      },
    ],
    rightAnswer: [1, 3, 4],
  },
  {
    id: 3,
    type: "boolean",
    body: {
      type: "code snippet",
      content:
        "/**\n * Корректна ли такая запись?\n */\nconst Component = () => {\n  return <div />;\n};",
    },
    tags: ["react", "junior", "jsx"],
    rightAnswer: true,
  },
  {
    id: 4,
    type: "single",
    body: {
      type: "code snippet",
      content:
        "/**\n * Как правильно вставить классовый атрибут\n */\nconst Component2 = () => {\n  return <div /* ключевое слово */>Мне нужен класс</div>;\n};",
    },
    tags: ["react", "junior", "jsx"],
    availableAnswer: [
      { id: 1, content: "class='btn'" },
      { id: 2, content: "classList='btn'" },
      { id: 3, content: "className='btn'" },
    ],
    rightAnswer: 3,
  },
  {
    id: 5,
    type: "multiple",
    body: {
      type: "code snippet",
      content:
        '/**\n * Как правильно вставить tabindex атрибут\n */\nconst Component3 = () => {\n  return (\n    <nav>\n      <ul>\n        <li>\n          <a href="/">Home</a>\n        </li>\n        <li>\n          <a href="/about">About</a>\n        </li>\n      </ul>\n      <a href="/" /* здесь атрибут */>Logotype</a>\n    </nav>\n  );\n};',
    },
    tags: ["react", "junior", "jsx"],
    availableAnswer: [
      { id: 1, content: "tabindex='1'" },
      { id: 2, content: "tabIndex='1'" },
      { id: 3, content: "tabindex={1}" },
      { id: 4, content: "tabIndex={1}" },
    ],
    rightAnswer: [2, 4],
  },
  {
    id: 6,
    type: "single",
    body: "Babel компилирует JSX в вызовы:",
    tags: ["react", "junior++", "jsx"],
    availableAnswer: [
      { id: 1, content: "React.createElement()" },
      { id: 2, content: "React.createComponent()" },
      { id: 3, content: "React.Component()" },
      { id: 4, content: "React.PureComponent()" },
    ],
    rightAnswer: 1,
  },
  {
    id: 7,
    type: "multiple",
    tags: ["react", "junior+", "jsx"],
    body: "Выберите правильное утверждения:",
    availableAnswer: [
      {
        id: 1,
        content: "Встраивание выражений в JSX обрамляется в фигурные скобки",
      },
      {
        id: 2,
        content: "JSX создают компоненты React",
      },
      {
        id: 3,
        content:
          "После компиляции каждое JSX-выражение становиться обычным вызовом JS функции",
      },
      {
        id: 4,
        content:
          "После компиляции каждое JSX-выражение становиться обычным объектом",
      },
    ],
    rightAnswer: [1, 3],
  },
  {
    id: 8,
    type: "single",
    tags: ["react", "junior", "jsx"],
    body: "Чтобы задать атрибут у которого значением является строковый литерал используют ...",
    availableAnswer: [
      { id: 1, content: "()" },
      { id: 2, content: '""' },
      { id: 3, content: "{}" },
      { id: 4, content: "[]" },
    ],
    rightAnswer: 2,
  },
  {
    id: 9,
    type: "multiple",
    tags: ["react", "junior", "jsx"],
    body: "Выберите правильно утверждение ...",
    availableAnswer: [
      {
        id: 1,
        content:
          "Если значение атрибута требует указать JS выражение, необходимо использовать фигурные скобки",
      },
      {
        id: 2,
        content: "В JSX атрибуты именуются в camelCase",
      },
      {
        id: 3,
        content: "В JSX атрибуты именются в snake_case",
      },
      {
        id: 4,
        content:
          "React по умолчанию экранирует все значения перед тем как отрендерить их",
      },
    ],
    rightAnswer: [1, 2, 3],
  },
  {
    id: 10,
    type: "multiple",
    tags: ["react", "junior"],
    body: "Выберете правильное утверждение:",
    availableAnswer: [
      {
        id: 1,
        content: "В отличие от DOM элементов, элементы React – простые объекты",
      },
      {
        id: 2,
        content:
          "ReactDOM сравнивает элемент и его дочернее дерево с предыдущей версией и вносит в DOM только минимально необходимые изменения",
      },
      {
        id: 3,
        content:
          "Элементы React иммутабельны. После создания элемента нельзя изменить его потомков или атрибутов.",
      },
      {
        id: 4,
        content:
          "Элементы React мутабельны. После создания элемента можно изменить его потомков или атрибутов.",
      },
    ],
    rightAnswer: [1, 2, 3],
  },
  {
    id: 11,
    type: "multiple",
    tags: ["react", "junior"],
    body: "Выберете правильное(ые) утверждение:",
    availableAnswer: [
      {
        id: 1,
        content: "Компоненты позволяют разбить интерфейс на независимые части",
      },
      {
        id: 2,
        content:
          "Во многом компоненты ведут себя как обычные функции JS. Они принимают произвольные данные (пропсы) и возвращают React элементы",
      },
      {
        id: 3,
        content:
          "Пропсы можно изменять внутри компонента, чтобы вызвать перерендер, обновление интерфейса",
      },
      {
        id: 4,
        content:
          "<Welcome attr1=’attr1’ attr2=’attr2’ /> Когда React встречает подобный элемент, он собирает все JSX-атрибуты и дочерние элементы в один массив и передаёт в компонент.",
      },
    ],
    rightAnswer: [1, 2],
  },
  {
    id: 12,
    type: "boolean",
    tags: ["react", "junior"],
    body: {
      type: "code snippet",
      content:
        "/**\n * Корректна ли такая запись\n */\nconst comp = () => <div>Hello World</div>;\nconst Comp = comp;\n\nconst App = () => {\n  return <Comp />;\n};",
    },
    rightAnswer: true,
  },
  {
    id: 13,
    type: "boolean",
    tags: ["react", "junior"],
    body: {
      type: "code snippet",
      content:
        "/**\n * Корректна ли такая запись ?\n */\nconst comp1 = () => <div>Hello World</div>;\n\nconst App = () => {\n  return <comp1 />;\n};\n\nexport default App;\n",
    },
    rightAnswer: false,
  },
  // {
  //   id: 14,
  //   type: "multiple",
  //   tags: ["react", "junior"],
  //   body: "Выберете правильное(ые) утверждение:",
  //   availableAnswer: [
  //     {
  //       id: 1,
  //       content:
  //         "Чтобы создать компонент нужно обязательно использовать функции",
  //     },

  //   ],
  // },
];
