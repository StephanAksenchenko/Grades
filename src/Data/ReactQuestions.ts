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
    tags: ["react", "junior", "components"],
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
    tags: ["react", "junior", "components"],
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
    tags: ["react", "junior", "jsx"],
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
    tags: ["react", "junior", "jsx"],
    body: {
      type: "code snippet",
      content:
        "/**\n * Корректна ли такая запись ?\n */\nconst comp1 = () => <div>Hello World</div>;\n\nconst App = () => {\n  return <comp1 />;\n};\n\nexport default App;\n",
    },
    rightAnswer: false,
  },
  {
    id: 14,
    type: "single",
    tags: ["react", "junior", "jsx"],
    body: "Как встроить JS выражение в JSX? (expression - любое JS выражение)",
    availableAnswer: [
      { id: 1, content: "<h1>{expression}</h1>" },
      { id: 2, content: "<h1>expression</h1>" },
      { id: 3, content: '<h1>"expression"</h1>' },
      { id: 4, content: "<h1>(expression)</h1>" },
    ],
    rightAnswer: 1,
  },
  {
    id: 15,
    type: "boolean",
    tags: ["react", "jsx", "junior"],
    body: "Является ли JSX элемент JS выражением?",
    rightAnswer: true,
  },
  {
    id: 16,
    type: "single",
    tags: ["junior", "react", "state"],
    body: {
      type: "code snippet",
      content:
        "/**\n * Какое значение будет у переменной counter после\n * трех нажатий кнопки “Увеличить”? (см. приведенный фрагмент кода):\n */\n\nconst Button = ({ counter, children }) => {\n  const handler = () => {\n    counter = counter + 1;\n  };\n  return <button onClick={handler}>{children}</button>;\n};\n\nexport default function App() {\n  const counter = 0;\n  return (\n    <div>\n      <Button counter={counter}>Увеличить</Button>\n      <p>{counter}</p>\n    </div>\n  );\n}\n",
    },
    availableAnswer: [
      { id: 1, content: "3" },
      { id: 2, content: "0" },
      { id: 3, content: "4" },
      { id: 4, content: "Код написан некорректно и вызовет исключение" },
    ],
    rightAnswer: 2,
  },
  {
    id: 17,
    type: "single",
    tags: ["junior", "react", "jsx"],
    body: {
      type: "code snippet",
      content:
        '/**\n * Что будет выведено в консоль в итоге его работы?\n */\nconst Button = ({ borderless, children }) => {\n  if (borderless) {\n    console.log("borderless");\n  } else {\n    console.log("!borderless");\n  }\n  return <button>{children}</button>;\n};\n\nexport default function App() {\n  return <Button borderless>Button</Button>;\n}\n',
    },
    availableAnswer: [
      { id: 1, content: "!borderless" },
      { id: 2, content: "borderless borderless" },
      { id: 3, content: "borderless" },
      { id: 4, content: "borderless, !borderless" },
    ],
    rightAnswer: 3,
  },
  {
    id: 18,
    type: "single",
    tags: ["react", "junior", "state"],
    body: "Что такое состояние (state) компонента?",
    availableAnswer: [
      {
        id: 1,
        content:
          "Некое значение (свойство компонента) которое сохраняется между рендерами компонента",
      },
      {
        id: 2,
        content: "Качество кода внутри компонента",
      },
      {
        id: 3,
        content: "Степень готовности компонента в процессе разработки",
      },
    ],
    rightAnswer: 1,
  },
  {
    id: 19,
    type: "single",
    tags: ["react", "junior", "state", "hooks"],
    body: "Как объявить переменную состояния isCollapsed и проинициализировать ее значением “ложь”? (В контексте React Hooks API)",
    availableAnswer: [
      {
        id: 1,
        content: "const [isCollapsed, setIsCollapsed] = useState(false);",
      },
      {
        id: 2,
        content: "const isCollapsed = useRef(false);",
      },
      {
        id: 3,
        content: "const isCollapsed = false;",
      },
      { id: 4, content: "const isCollapsed = setState(false)" },
    ],
    rightAnswer: 1,
  },
  {
    id: 20,
    type: "single",
    tags: ["react", "junior", "state", "hooks"],
    body: {
      type: "code snippet",
      content:
        "/**\n * Как создать несколько состояний в компоненте?\n */\n\n  //вариант 1\n  const [state1, setState1] = useState(1);\n  const [state2, setState2] = useState(2);\n\n  //вариант 2\n  const state = { state1: 1, state2: state2 };\n\n  //вариант 3\n  useState({ state1: 1, state2: 2 });\n\n  //вариант 4\n  setState1({ state1: 1, state2: 2 });",
    },
    availableAnswer: [
      {
        id: 1,
        content: "вариант 1",
      },
      {
        id: 2,
        content: "вариант 2",
      },
      {
        id: 3,
        content: "вариант 3",
      },
      {
        id: 4,
        content: "вариант 4",
      },
    ],
    rightAnswer: 1,
  },
  {
    id: 21,
    type: "single",
    tags: ["react", "junior", "hooks"],
    body: "Что возвращает функция useState()?",
    availableAnswer: [
      { id: 1, content: "React Hook для создания переменной состояния" },
      { id: 2, content: "Переменную состояния и функцию для ее очистки" },
      { id: 3, content: "Эта функция не возвращает ничего" },
      {
        id: 4,
        content:
          "Кортеж (коллекцию) содержащий переменную состояния и функцию для ее обновления",
      },
    ],
    rightAnswer: 4,
  },
  {
    id: 22,
    type: "single",
    tags: ["react", "junior", "state", "hooks"],
    body: {
      type: "code snippet",
      content:
        '/**\n * Основываясь на приведенном фрагменте кода\n * ответьте - как в обработчике события изменить\n * значение переменной состояния, чтобы при вводе\n * в поле сообщение об ошибке исчезало?\n */\nconst MyComponent = () => {\n  const [isError, setIsError] = useState(true);\n  return (\n    <div>\n      <input\n        // Обработчик изменения поля\n        onChange={() => {}}\n      ></input>\n      {isError && <p className="errorMessage">This field can not be empty!</p>}\n    </div>\n  );\n};\n',
    },
    availableAnswer: [
      { id: 1, content: "isError = false;" },
      { id: 2, content: "isError = useState(false);" },
      { id: 3, content: "setIsError(false);" },
      { id: 4, content: "useState((isError) => isError = false);" },
    ],
    rightAnswer: 3,
  },
  {
    id: 23,
    type: "multiple",
    tags: ["react", "junior+", "hooks"],
    body: "Какие аргументы принимает функция useState()? (Возможно, более одного ответа верные)",
    availableAnswer: [
      { id: 1, content: "Функцию, возвращающую начальное состояние" },
      {
        id: 2,
        content:
          "Функция не принимает никаких аргументов и служит лишь для объявления переменной",
      },
      {
        id: 3,
        content: "1) Начальное состояние 2) объект конфигурации;",
      },
      { id: 4, content: "Начальное состояние" },
    ],
    rightAnswer: [1, 4],
  },
  {
    id: 24,
    type: "multiple",
    tags: ["react", "junior+", "hooks"],
    body: "Какие аргументы принимает функция-сеттер переменной состояния? (Возможно, более одного ответа верные)",
    availableAnswer: [
      { id: 1, content: "1) старое состояние; 2) новое состояние" },
      { id: 2, content: "функцию, возвращающую новое состояние" },
      { id: 3, content: "1) Имя переменной 2) новое значение" },
      { id: 4, content: "новое значение" },
    ],
    rightAnswer: [2, 4],
  },
  {
    id: 25,
    type: "single",
    tags: ["react", "middle", "hooks"],
    body: "Если функция обновления возвращает такой же результат как и до обновления, то…",
    availableAnswer: [
      { id: 1, content: "React пропустит этот рендер" },
      { id: 2, content: "React “выбросит” исключение" },
      { id: 3, content: "Рендер пройдет в обычном режиме" },
      { id: 4, content: "Ничто из перечисленного не верно." },
    ],
    rightAnswer: 1,
  },
  {
    id: 26,
    type: "single",
    tags: ["react", "junior", "state", "hooks"],
    body: {
      type: "code snippet",
      content:
        '/**\n * По данному фрагменту кода установите что именно будет\n * отрисовано на странице после X нажатий на кнопку “Run”?\n */\nfunction CountWithoutEffect() {\n  const [counter, setCounter] = useState(0);\n  const [doubleCounter, setDoubleCounter] = useState(counter * 2);\n\n  const handleCount = () => {\n    setCounter(counter + 1);\n    setDoubleCounter(counter * 2);\n  };\n  return (\n    <div className="App">\n      <div>{counter}</div>\n      <div>{doubleCounter}</div>\n      <button onClick={handleCount}>Run</button>\n    </div>\n  );\n}',
    },
    availableAnswer: [
      { id: 1, content: "два значения: 1) X 2) (X - 1) * 2" },
      { id: 2, content: "одно значение: X + 1" },
      { id: 3, content: "два значения: 1) X + 1 2) X * 2" },
      {
        id: 4,
        content:
          "код написан некорректно и отрисовка не может быть произведена",
      },
    ],
    rightAnswer: 3,
  },
  {
    id: 27,
    type: "single",
    tags: ["react", "junior+", "hooks"],
    body: {
      type: "code snippet",
      content:
        "/**\n * Как получить доступ к значению состояния на предыдущем рендере?\n */\n\n// Вариант 1\nsetState((state, index) => {\nreturn state[index - 1].value;\n});\n\n// Вариант 2\nsetState((old) => {\nreturn old;\n});\n\n// Вариант 3\nsetState((value) => {\nreturn value.old;\n});\n\n// Вариант 4\nusePreviousState(state);",
    },
    availableAnswer: [
      { id: 1, content: "Вариант 1" },
      { id: 2, content: "Вариант 2" },
      { id: 3, content: "Вариант 3" },
      { id: 4, content: "Вариант 4" },
    ],
    rightAnswer: 2,
  },
  {
    id: 28,
    type: "single",
    tags: ["react", "junior", "events"],
    body: {
      type: "code snippet",
      content:
        '/**\n * Добавьте обработчик удаления продукта.\n * Для наглядности приведен следующий код:\n */\nfunction App() {\n  const products = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];\n  const handleRemove = () => {};\n  return (\n    <div className="App">\n      {products.map((product) => {\n        return <button key={product.id}>Удалить #{product.id}</button>;\n      })}\n    </div>\n  );\n}',
    },
    availableAnswer: [
      {
        id: 1,
        content: "document.querySelector('#button').click = handleRemove;",
      },
      {
        id: 2,
        content:
          "<button onClick={handleRemove}>Удалить #{product.id}</button>",
      },
      {
        id: 3,
        content:
          "<button onClick=”handleRemove()”>Удалить #{product.id}</button>",
      },
    ],
    rightAnswer: 2,
  },
  {
    id: 29,
    type: "single",
    tags: ["react", "junior", "events"],
    body: {
      type: "code snippet",
      content:
        '/**\n * Как предотвратить вызов обработчика события по умолчанию в рамках React?\n * Опирайтесь на код предоставленный ниже для наглядности:\n */\nexport default function App() {\n  const handleSubmit = (e) => {};\n  return (\n    <div className="wrapper">\n      <h1>Personal Info</h1>\n      <form onSubmit={handleSubmit}>\n        <fieldset>\n          <label>\n            <p>Given Name</p>\n            <input name="name" />\n          </label>\n          <label>\n            <p>Family Name</p>\n            <input name="famName" />\n          </label>\n        </fieldset>\n        <button type="submit">Save</button>\n      </form>\n    </div>\n  );\n}\n',
    },
    availableAnswer: [
      { id: 1, content: "const handleSubmit = (e) =>  false;" },
      { id: 2, content: "const handleSubmit = (e) => { e.preventDefault();};" },
      { id: 3, content: "const handleSubmit = (e) => {};" },
    ],
    rightAnswer: 2,
  },
  {
    id: 30,
    type: "single",
    tags: ["react", "junior", "jsx"],
    body: {
      type: "code snippet",
      content:
        "/**\n * Основываясь на приведенном фрагменте определите,\n * что именно будет отрисовано в браузере?\n */\nfunction App() {\n  const messages = [];\n  return (\n    <div>\n      {messages.length && (\n        <>\n          <p>Your messages: </p>\n          {messages.map((item, i) => (\n            <p key={i}>{item}</p>\n          ))}\n        </>\n      )}\n    </div>\n  );\n}",
    },
    availableAnswer: [
      {
        id: 1,
        content: "Этот код написан некорректно и приведет к ошибке React",
      },
      {
        id: 2,
        content: "Ничего (пустая страница)",
      },
      {
        id: 3,
        content: "[]",
      },
      {
        id: 4,
        content: "0",
      },
    ],
    rightAnswer: 4,
  },
  {
    id: 31,
    type: "single",
    tags: ["react", "junior", "jsx"],
    body: {
      type: "code snippet",
      content:
        '/**\n * Отмените отрисовку компонента Warning внутри него согласно условию condition.\n * Для наглядности приведен следующий код:\n */\nconst Warning = ({ isShown, children }) => {\n  return <div className="warning">{children}</div>;\n};\n\nfunction App() {\n  const warning = "Warning!";\n  const condition = true;\n  return (\n    <div className="wrapper">\n      <Warning isShown={condition}>{warning}</Warning>\n    </div>\n  );\n}\n',
    },
    availableAnswer: [
      { id: 1, content: "if (!isShown) return ‘’;" },
      { id: 2, content: "if (isShown) return ‘’;" },
      { id: 3, content: "return null;" },
      { id: 4, content: "if (!isShown) return null;" },
    ],
    rightAnswer: 4,
  },
  {
    id: 32,
    type: "single",
    tags: ["react", "junior", "components"],
    body: "Какой атрибут каждого из элементов коллекции при ее рендере используется React для определения, какие элементы были изменены, добавлены или удалены.",
    availableAnswer: [
      { id: 1, content: "key" },
      { id: 2, content: "id" },
      { id: 3, content: "uniqueId" },
      { id: 4, content: "index" },
    ],
    rightAnswer: 1,
  },
  {
    id: 33,
    type: "single",
    tags: ["react", "junior", "components"],
    body: "Необходимое условие для значения атрибута ключа для элемента React это …",
    availableAnswer: [
      {
        id: 1,
        content: "Уникальность в рамках компонента",
      },
      {
        id: 2,
        content: "Уникальность в рамках приложения",
      },
      {
        id: 3,
        content: "Уникальность в рамках конкретной коллекции элементов",
      },
      {
        id: 4,
        content: "Уникальность в рамках элемента HTML",
      },
    ],
    rightAnswer: 3,
  },
  {
    id: 34,
    type: "single",
    tags: ["react", "junior", "components"],
    body: "При извлечении компонента-члена коллекции следует его ключ… ",
    availableAnswer: [
      {
        id: 1,
        content:
          "Перенести его в качестве пропса на новый компонент в том месте, где он встраивается в JSX",
      },
      {
        id: 2,
        content: "Перенести вместе с нативным html элементом в новый компонент",
      },
      {
        id: 3,
        content:
          "Перенести его в качестве атрибута на новый компонент в том месте, где он встраивается в JSX",
      },
      {
        id: 4,
        content: "Смысл использования key исчезает с извлечением компонента",
      },
    ],
    rightAnswer: 3,
  },
  {
    id: 35,
    type: "multiple",
    tags: ["react", "junior", "controlled components"],
    body: {
      type: "code snippet",
      content:
        '/**\n * Какие шаги из перечисленных необходимы для создания управляемого поля name\n */\nfunction App() {\n  return (\n    <div className="wrapper">\n      <form>\n        <input name="name" />\n      </form>\n    </div>\n  );\n}\n',
    },
    availableAnswer: [
      { id: 1, content: "const [name, setName] = useState();" },
      { id: 2, content: "const handleSetName = (name) => {setName(name)};" },
      { id: 3, content: '<input name="name" value={name} />' },
      { id: 4, content: '<input name="name" onSet={handleSetName} /> ' },
    ],
    rightAnswer: [1, 3],
  },
  {
    id: 36,
    type: "multiple",
    tags: ["react", "context", "junior+"],
    body: "Выберите верное(ые) утверждения:",
    availableAnswer: [
      {
        id: 1,
        content:
          "Контекст позволяет передавать данные через дерево компонентов без необходимости передавать пропсы на промежуточных уровнях",
      },
      {
        id: 2,
        content:
          "Consumer — это React-компонент, который подписывается на изменения контекста ",
      },
      {
        id: 3,
        content:
          "Когда React первый раз рендерит компонент, который подписан на контекст, компонент получит значение контекста переданного в React.createContext('значение по-умолчанию')",
      },
      {
        id: 4,
        content:
          "Один Provider может быть связан с несколькими компонентами, потребляющими контекст",
      },
    ],
    rightAnswer: [1, 2, 4],
  },
  {
    id: 37,
    type: "single",
    tags: ["react", "context", "junior++"],
    body: {
      type: "code snippet",
      content:
        '/**\n * Какое значение выведет React в span при первом рендере?\n */\n\nimport { createContext, useContext } from "react";\n\nconst Context = createContext("значение1");\n\nconst App = () => {\n  const ctx = useContext(Context);\n\n  return (\n    <Context.Provider value={"значение2"}>\n      <Context.Consumer>{(value) => <span>{value}</span>}</Context.Consumer>\n    </Context.Provider>\n  );\n};',
    },
    availableAnswer: [
      { id: 1, content: "значение1" },
      { id: 2, content: "значение2" },
    ],
    rightAnswer: 2,
  },
  {
    id: 38,
    type: "multiple",
    tags: ["react", "context", "senior++"],
    body: {
      type: "code snippet",
      content:
        '/**\n * Какие компоненты будут перерендериваться после изменения контекста?\n */\n\nimport { createContext, useContext, useState } from "react";\n\nconst Context = createContext({ name: "user" });\n\nconst App = () => {\n  const [name, setName] = useState("User");\n\n  return (\n    <Context.Provider value={{ name, setName }}>\n      <Welcome />\n      <UserGreeting />\n      <Login />\n    </Context.Provider>\n  );\n};\n\nconst Welcome = () => <h1>Welcome to our test</h1>;\n\nconst UserGreeting = () => {\n  const { name } = useContext(Context);\n\n  return <p>Hello, {name}</p>;\n};\n\nconst Login = () => {\n  const { setName } = useContext(Context);\n\n  const onClick = () => setName("Alex");\n\n  return <button onClick={onClick}>Login</button>;\n};',
    },
    availableAnswer: [
      { id: 1, content: "App" },
      { id: 2, content: "Welcome" },
      { id: 3, content: "UserGreeting" },
      { id: 4, content: "Login" },
    ],
    rightAnswer: [1, 2, 3, 4],
  },
  {
    id: 39,
    type: "single",
    tags: ["react", "context", "senior"],
    body: {
      type: "code snippet",
      content:
        '/**\n * Какое значение будет выведено в span?\n */\nconst Context = createContext("value");\n\nconst App = () => {\n  return (\n    <Context.Provider value={"value1"}>\n      {(value) => (\n        <Context.Provider value={"value2"}>\n          <Context.Consumer>{(value) => <span>{value}</span>}</Context.Consumer>\n        </Context.Provider>\n      )}\n    </Context.Provider>\n  );\n};\n',
    },
    availableAnswer: [
      { id: 1, content: "value" },
      { id: 2, content: "value1" },
      { id: 3, content: "value2" },
      { id: 4, content: "Реакт вызовет ошибку" },
    ],
    rightAnswer: 4,
  },
  {
    id: 40,
    type: "single",
    tags: ["react", "context", "middle+"],
    body: {
      type: "code snippet",
      content:
        '/**\n * App отрисовывает два счётчика, у которых есть span,\n * для отображения значения счётчика и есть кнопка, увеличивающая значение счётчика на один.\n * Если у каждого счётчика нажать один раз кнопку Increment, каковы будут значения счётчиков\n */\nconst Context = createContext("value");\n\nconst App = () => {\n  return (\n    <>\n      <Counter />\n      <Counter />\n    </>\n  );\n};\n\nconst Counter = () => {\n  const [state, setState] = useState(0);\n  const increment = () => setState(state + 1);\n\n  return (\n    <>\n      <Context.Provider value={{ state, setState }}>\n        <Context.Consumer>\n          {(value) => <span>{value.state}</span>}\n        </Context.Consumer>\n      </Context.Provider>\n      <button onClick={increment}>Increment</button>\n    </>\n  );\n};',
    },
    availableAnswer: [
      {
        id: 1,
        content:
          "Значение каждого счётчика будет 2, так как используется один и тот же, контекст",
      },
      {
        id: 2,
        content:
          "Значение каждого счётчика будет 1, так как у них разные провайдеры",
      },
      {
        id: 3,
        content: "Будет выведена ошибка, так нельзя использовать контекст",
      },
      {
        id: 4,
        content:
          "Будет выведено значение 'value' так как такое использование контекста вызовет ошибку и будет показано default значение",
      },
    ],
    rightAnswer: 2,
  },
  {
    id: 41,
    type: "multiple",
    tags: ["react", "context", "middle"],
    body: "Выберите верное(ые) утверждение:",
    availableAnswer: [
      {
        id: 1,
        content:
          "Контекст использует сравнение по ссылкам, чтобы определить, когда запускать последующий рендер",
      },
      {
        id: 2,
        content:
          "Объекту Context можно задать строковое свойство displayName. React DevTools использует это свойство при отображении названии контекста",
      },
      {
        id: 3,
        content:
          "Чтобы получить значение из Context, можно использовать компонент Сontext.Consumption",
      },
      {
        id: 4,
        content: "В контексте можно хранить только примитивные значения",
      },
    ],
    rightAnswer: [1, 2],
  },
  {
    id: 42,
    type: "single",
    tags: ["react", "fragment"],
    body: "Выберите неверное утверждение:",
    availableAnswer: [
      {
        id: 1,
        content:
          "Фрагменты - компоненты, позволяющие возвращать несколько элементов из компонентов",
      },
      {
        id: 2,
        content:
          "В компонент <React.Fragment> можно передать только один единственный атрибут key",
      },
      {
        id: 3,
        content:
          "Сокращённой формой <React.Fragment></React.Fragment> является <></>",
      },
      {
        id: 4,
        content:
          "<React.Fragment></React.Fragment> и <></> абсолютно идентичны",
      },
    ],
    rightAnswer: 4,
  },
  {
    id: 43,
    type: "multiple",
    tags: ["react", "hooks", "junior+"],
    body: "Выберите верное(ые) утверждения:",
    availableAnswer: [
      {
        id: 1,
        content:
          "С помощью хука эффекта useEffect вы можете выполнять побочные эффекты из функционального компонента.",
      },
      {
        id: 2,
        content:
          "React выполняет эффект, до того как произошли изменения в DOM, чтобы не блокировать работу браузера",
      },
      {
        id: 3,
        content:
          "useEffect(f) При необходимости из функции f можно вернуть другую функцию,которая будет проверять нужно ли запустить эффект",
      },
      {
        id: 4,
        content:
          "useEffect(f, [args]) Чтобы внутри функции f иметь доступ к нужным переменным компонента, их необходимо передать вместе с функции вторым параметром (в массиве)",
      },
    ],
    rightAnswer: [1],
  },
  {
    id: 44,
    type: "single",
    tags: ["react", "hooks", "middle+"],
    body: {
      type: "code snippet",
      content:
        '/**\n * Что выведется в консоль?\n */\nconst App = () => {\n  console.log("begin");\n  useEffect(() => console.log("useEffect"));\n  useLayoutEffect(() => console.log("useLayoutEffect"));\n\n  console.log("end");\n  return <div>Hello</div>;\n};',
    },
    availableAnswer: [
      { id: 1, content: "begin -> useLayoutEffect -> useEffect -> end" },
      { id: 2, content: "begin -> useEffect -> useLayoutEffect -> end" },
      { id: 3, content: "useLayoutEffect -> begin -> end -> useEffect" },
      { id: 4, content: "begin -> end -> useLayoutEffect -> useEffect" },
    ],
    rightAnswer: 4,
  },
  {
    id: 45,
    type: "boolean",
    tags: ["react", "optimization"],
    body: {
      type: "code snippet",
      content:
        '/**\n * Есть ли в данном примере проблемы с утечкой памяти?\n */\nconst App = () => {\n  const onScroll = useCallback(() => console.log(window.scrollY), []);\n\n  useEffect(() => {\n    window.addEventListener("scroll", onScroll);\n  }, [onScroll]);\n\n  return <div />;\n};',
    },
    rightAnswer: false,
  },
  {
    id: 46,
    type: "multiple",
    tags: ["react", "context", "hooks", "junior"],
    body: "Как получить значение контекста с помощью хука useContext",
    availableAnswer: [
      { id: 1, content: "useContext(MyContext)" },
      { id: 2, content: "useContext(MyContext.Consumer)" },
      { id: 3, content: "useContext(MyContext.Provider)" },
      { id: 4, content: "useContext(MyContext.value)" },
    ],
    rightAnswer: [1],
  },
  {
    id: 47,
    type: "multiple",
    tags: ["react", "optimization"],
    body: {
      type: "code snippet",
      content:
        '/**\n * Какие компоненты будут перерендериваться, если нажать на IncreaseButton или IncreaseButtonMemo?\n */\nconst Context = createContext({});\n\nconst App = () => {\n  const [state, setState] = useState(0);\n\n  return (\n    <Wrapper>\n      <Context.Provider value={{ state, setState }}>\n        <Info />\n        <InfoMemo />\n        <IncreaseButton />\n        <IncreaseButtonMemo />\n      </Context.Provider>\n    </Wrapper>\n  );\n};\n\nconst IncreaseButton = () => {\n  const { state, setState } = useContext(Context);\n  const increase = () => setState(state + 1);\n\n  return <button onClick={increase}>Increase</button>;\n};\n\nconst IncreaseButtonMemo = React.memo(IncreaseButton);\n\nconst Info = () => {\n  return <p>Click the button</p>;\n};\n\nconst InfoMemo = React.memo(Info);\n\nconst Wrapper = ({ children }) => <div className="wrapper">{children}</div>;\n',
    },
    availableAnswer: [
      { id: 1, content: "Wrapper" },
      { id: 2, content: "Info" },
      { id: 3, content: "InfoMemo" },
      { id: 4, content: "IncreaseButton" },
      { id: 5, content: "IncreaseButtonMemo" },
    ],
    rightAnswer: [1, 2, 4, 5],
  },
  {
    id: 48,
    type: "single",
    tags: ["react", "optimization"],
    body: {
      type: "code snippet",
      content:
        "/**\n * Имеет ли смысл использовать MainMemo \n * (Какие компоненты будут перерендериваться при нажатии на кнопку Increase?\n */\nconst Context = createContext({});\n\nconst App = () => {\n  const [count, setCount] = useState(0);\n\n  return (\n    <div>\n      <Context.Provider value={{ count, setCount }}>\n        <MainMemo />\n      </Context.Provider>\n    </div>\n  );\n};\n\nconst Main = () => {\n  return <Counter />;\n};\n\nconst MainMemo = React.memo(Main);\n\nconst Counter = () => {\n  const { count, setCount } = useContext(Context);\n\n  return (\n    <>\n      <div>{count}</div>\n      <button onClick={() => setCount(count + 1)}>Increase</button>\n    </>\n  );\n};",
    },
    availableAnswer: [
      {
        id: 1,
        content:
          "Мемоизация Main приведёт к ошибке, не правильному отображению счётчика, так как MainMemo не будет перерендериваться",
      },
      {
        id: 2,
        content:
          "Мемоизированный Main всё равно будет перерендериваться, так как один из его потомков зависит от значения контекста",
      },
      {
        id: 3,
        content:
          "Мемоизированный Main не будет перерендериваться, но потомки будут",
      },
    ],
    rightAnswer: 3,
  },
  {
    id: 49,
    type: "single",
    tags: ["react", "ref", "middle++"],
    body: {
      type: "code snippet",
      content:
        "/**\n * Найдите ошибку в данном коде?\n */\nconst App = () => {\n  const ref = useRef();\n  const increase = () => ref.current.increase();\n\n  return (\n    <>\n      <CounterForwardRef ref={ref} />\n      <button onClick={increase}>Increase</button>\n    </>\n  );\n};\n\nconst Counter = (props, ref) => {\n  const counterRef = useRef();\n  const [counter, setCounter] = useState(0);\n\n  useImperativeHandle(\n    ref,\n    () => ({\n      increase: () => setCounter(counter + 1),\n    }),\n    [counter]\n  );\n\n  return <div ref={counterRef}>{counter}</div>;\n};\n\nconst CounterForwardRef = forwardRef(Counter);\n",
    },
    availableAnswer: [
      {
        id: 1,
        content: "В хук useImperativeHandle нужно передавать counterRef",
      },
      {
        id: 2,
        content:
          "В зависимости хука useImperativeHandle нужно передать setCounter",
      },
      {
        id: 3,
        content: "В функциональный компонент нельзя передавать ref",
      },
      {
        id: 4,
        content: "Данный код является рабочим",
      },
    ],
    rightAnswer: 4,
  },
  {
    id: 50,
    type: "multiple",
    tags: ["react", "ref", "junior+"],
    body: "Выберите правильное(ые) утверждения:",
    availableAnswer: [
      { id: 1, content: "Рефы дают возможность получить доступ к DOM-узлам" },
      {
        id: 2,
        content:
          "React присвоит DOM-элемент свойству current при монтировании компонента",
      },
      {
        id: 3,
        content:
          "По умолчанию нельзя использовать атрибут ref с классовыми компонентами",
      },
      {
        id: 4,
        content:
          "Если вам нужен реф на классовый компонент, можете воспользоваться forwardRef",
      },
    ],
    rightAnswer: [1, 2],
  },
  {
    id: 51,
    type: "single",
    tags: ["react", "ref", "junior++"],
    body: {
      type: "code snippet",
      content:
        "/**\n * Какое значение выведет console.log(ref) при первом рендере?\n */\nconst App = () => {\n  const ref = useRef(null);\n  console.log(ref);\n\n  return <button ref={ref}>Click</button>;\n};",
    },
    availableAnswer: [
      { id: 1, content: "null" },
      { id: 2, content: "{current: null}" },
      { id: 3, content: "{current: button}" },
      { id: 4, content: "undefined" },
    ],
    rightAnswer: 2,
  },
  {
    id: 52,
    type: "multiple",
    tags: ["react", "render-prop"],
    body: "Выберите правильное(ые) утверждения:",
    availableAnswer: [
      {
        id: 1,
        content:
          "Рендер-проп — функция, которая сообщает компоненту что необходимо рендерить",
      },
      {
        id: 2,
        content:
          "Рендер-проп — компонент, который передаётся другому компоненту для рендера",
      },
      {
        id: 3,
        content:
          "Компонент с рендер-пропом берёт функцию, которая возвращает React-элемент, и вызывает её вместо реализации собственного рендера",
      },
      {
        id: 4,
        content:
          "Рендер-проп обязательно должен называться render, так как React особым образом обрабатывает данный проп",
      },
    ],
    rightAnswer: [1, 3],
  },
  {
    id: 53,
    type: "multiple",
    tags: ["react", "optimization"],
    body: {
      type: "code snippet",
      content:
        "/**\n * Какие компоненты будут перерендериваться при нажатии кнопки Increase?\n */\nconst App = () => {\n  const [counter, setCounter] = useState(0);\n  const DataRender = useCallback((data) => <DataPreviewMemo data={data} />, []);\n\n  return (\n    <>\n      <DataProvider render={DataRender} />\n      <button onClick={() => setCounter(counter + 1)}>Increase</button>\n    </>\n  );\n};\n\nconst DataProvider = ({ render }) => {\n  const data = [1, 2, 3];\n  return render(data);\n};\n\nconst DataPreview = ({ data }) => (\n  <ul>\n    {data.map((item) => (\n      <li key={item}>{item}</li>\n    ))}\n  </ul>\n);\nconst DataPreviewMemo = memo(DataPreview);",
    },
    availableAnswer: [
      { id: 1, content: "App" },
      { id: 2, content: "DataProvider" },
      { id: 3, content: "DataPreviewMemo" },
    ],
    rightAnswer: [1, 2, 3],
  },
  {
    id: 54,
    type: "multiple",
    tags: ["react", "strict mode"],
    body: "Выберите верное(ые) утверждения",
    availableAnswer: [
      {
        id: 1,
        content:
          "StrictMode — инструмент для обнаружения потенциальных проблем в приложении. (Использование небезопасных методов жизненного цикла,  устаревшего метода findDOMNode и т.д.)",
      },
      {
        id: 2,
        content:
          "Этап рендеринга (render phase) - в нём реакт вносит изменения в DOM",
      },
      {
        id: 3,
        content: "Компонент <StrictMode> не рендерит видимого UI",
      },
      {
        id: 4,
        content:
          "Компонент <StrictMode> нужно убирать в продакшен-билде, иначе это приведёт к лишней нагрузке",
      },
    ],
    rightAnswer: [1, 3],
  },
  {
    id: 55,
    type: "multiple",
    tags: ["react", "hooks", "junior++"],
    body: "Выберите верное(ые) утверждения",
    availableAnswer: [
      {
        id: 1,
        content:
          "Нельзя вызывать хуки в циклах, условных операторов или вложенных фунцкиях.",
      },
      {
        id: 2,
        content:
          "Название хука обязательно должно начинаться с use, иначе при рендере реакт выкинет исключение",
      },
      {
        id: 3,
        content:
          "Пользовательские хуки - это скорее соглашение, нежели возможность самого реакта",
      },
      {
        id: 4,
        content: "Реакт полагается на порядок вызова хуков",
      },
    ],
    rightAnswer: [1, 3, 4],
  },
  {
    id: 56,
    tags: ["react", "props", "junior"],
    type: "single",
    body: {
      type: "code snippet",
      content:
        '/**\n * Что выведет приложение после 3 раз нажатия на кнопку\n */\nconst App = () => {\n  const [counter, setCounter] = useState(0);\n\n  return (\n    <>\n      <Component title="Hello" />\n      <button onClick={() => setCounter(counter + 1)}>Click</button>\n    </>\n  );\n};\n\nconst Component = ({ title }) => {\n  title += " World";\n\n  return <h1>{title}</h1>;\n};',
    },
    availableAnswer: [
      {
        id: 1,
        content: "Hello World",
      },
      {
        id: 2,
        content: "Hello World World World",
      },
      {
        id: 3,
        content: "React выкинет исключение, так как нельзя изменять пропсы",
      },
      {
        id: 4,
        content: "Hello",
      },
    ],
    rightAnswer: 1,
  },
  {
    id: 57,
    type: "single",
    tags: ["react", "props", "middle"],
    body: {
      type: "code snippet",
      content:
        '/**\n * Какое текст выведится на экран?\n */\nconst App = () => {\n  const title = "Hello world";\n\n  return <Component title />;\n};\n\nconst Component = ({ title }) => {\n  return <div className="component">{title}</div>;\n};',
    },
    availableAnswer: [
      { id: 1, content: "Hello world" },
      { id: 2, content: "true" },
      { id: 3, content: "[object Object]" },
      { id: 4, content: "Пустой div" },
    ],
    rightAnswer: 4,
  },
  {
    id: 58,
    type: "single",
    tags: ["react", "jsx"],
    body: {
      type: "code snippet",
      content:
        '/**\n * Что выведется на экран?\n */\nconst App = () => {\n  const text = "Дом&nbsp;&mdash; это родное место";\n\n  return <Component text={text} />;\n};\n\nconst Component = ({ text }) => {\n  return <div>{text}</div>;\n};',
    },
    availableAnswer: [
      { id: 1, content: "Дом - это родное место" },
      { id: 2, content: "Дом&nbsp;&mdash; это родное место" },
      { id: 3, content: "[object Object]" },
    ],
    rightAnswer: 2,
  },
  {
    id: 59,
    type: "single",
    tags: ["react", "props", "middle+"],
    body: {
      type: "code snippet",
      content:
        '/**\n * Что выведится на экран?\n */\nconst App = () => {\n  const text1 = "Hello";\n  const text2 = "World";\n\n  return <Component text={text1} text={text2} />;\n};\n\nconst Component = ({ text }) => {\n  return <div>{text}</div>;\n};',
    },
    availableAnswer: [
      { id: 1, content: "Hello" },
      { id: 2, content: "World" },
      { id: 3, content: "Реакт выкинет исключение" },
      { id: 4, content: "HelloWorld" },
    ],
    rightAnswer: 2,
  },
  {
    id: 60,
    type: "single",
    tags: ["react", "jsx"],
    body: {
      type: "code snippet",
      content:
        "/**\n * Что выведится на экран?\n */\nconst App = () => {\n  const date = new Date();\n\n  return <div>{date}</div>;\n};",
    },
    availableAnswer: [
      { id: 1, content: "Текущая дата" },
      { id: 2, content: "[object Date]" },
      { id: 3, content: "Реакт выдаст исключение" },
      { id: 4, content: "Пустой div" },
    ],
    rightAnswer: 3,
  },
  {
    id: 61,
    type: "single",
    tags: ["react", "props", "middle++"],
    body: {
      type: "code snippet",
      content:
        "/**\n * Что будет выведено на экран\n * после нажатия на кнопку Increase?\n */\nconst App = () => {\n  const counter = useRef(0);\n\n  return <Component counter={counter} />;\n};\n\nconst Component = ({ counter }) => {\n  const onClick = () => {\n    counter.current = counter.current + 1;\n  };\n\n  return (\n    <>\n      <div>{counter.current}</div>\n      <button onClick={onClick}>Increase</button>\n    </>\n  );\n};",
    },
    availableAnswer: [
      { id: 1, content: "1" },
      { id: 2, content: "0" },
      {
        id: 3,
        content:
          "React выдаст исключение, так как реф должен быть присвоен DOM узлу",
      },
      {
        id: 4,
        content:
          "React выдаст исключение, так как нельзя напрямую изменять значение Ref",
      },
    ],
    rightAnswer: 2,
  },
  {
    id: 62,
    type: "single",
    tags: ["react", "props", "junior++"],
    body: {
      type: "code snippet",
      content:
        '/**\n * Какую фразу увидим на мониторе?\n */\nconst App = () => {\n  const props = {\n    title: "Hello world",\n    description: "This is awesome world",\n  };\n\n  return <Component props={props} />;\n};\n\nconst Component = ({ title }) => {\n  return <div>{title}</div>;\n};',
    },
    availableAnswer: [
      { id: 1, content: "Hello world" },
      { id: 2, content: "This is awesome world" },
      { id: 3, content: "Пустой div" },
      { id: 4, content: "[object Object]" },
    ],
    rightAnswer: 3,
  },
  {
    id: 63,
    type: "single",
    tags: ["react", "props", "junior+"],
    body: {
      type: "code snippet",
      content:
        '/**\n * Что будет выведено на экран?\n */\nconst App = () => {\n  const person = {\n    name: "Bob",\n    age: 26,\n    position: "developer",\n    specialization: "frontend",\n    level: "middle",\n  };\n\n  return <Component level="senior" {...person} />;\n};\n\nconst Component = ({ name, level = "junior", specialization, position }) => {\n  return (\n    <h1>\n      {name} - {level} {specialization} {position}\n    </h1>\n  );\n};',
    },
    availableAnswer: [
      { id: 1, content: "Bob - middle frontend developer" },
      { id: 2, content: "Bob - junior frontend developer" },
      { id: 3, content: "Bob - undefined frontend developer" },
      { id: 4, content: "Bob - senior frontend developer" },
    ],
    rightAnswer: 1,
  },
  {
    id: 64,
    type: "single",
    tags: ["react", "hooks", "junior++"],
    body: {
      type: "code snippet",
      content:
        '/**\n * Какая есть потенциальная проблема данного кода?\n */\nconst App = () => {\n  return <Component id={1} />;\n};\n\nconst Component = ({ id }) => {\n  if (!id) {\n    return null;\n  }\n\n  const [product, setProduct] = useState({\n    id: null,\n    title: "",\n    description: "",\n  });\n\n  useEffect(() => {\n    const getProduct = async () => {\n      const product = await getData("/product/id");\n      setProduct(product);\n    };\n\n    getProduct();\n  }, [id]);\n\n  return (\n    <>\n      <h1>{product.title}</h1>\n      <p>{product.description}</p>\n    </>\n  );\n};',
    },
    availableAnswer: [
      { id: 1, content: "Нельзя возвращать null из компонента" },
      { id: 2, content: "Нельзя вызывать хуки внутри вложенных функций" },
      { id: 3, content: "Нельзя вызывать хуки не на верхнем уровне" },
      { id: 4, content: "Нельзя вызывать хуки внутри обычных JS функций" },
    ],
    rightAnswer: 3,
  },
  {
    id: 65,
    type: "single",
    tags: ["react", "hooks", "senior+"],
    body: {
      type: "code snippet",
      content:
        '/**\n * Найдите проблему в данном коде?\n */\nconst UserContext = createContext({});\n\nconst UserProvider = ({ children }) => {\n  const [state, setState] = useState({\n    name: "user",\n  });\n\n  return (\n    <UserContext.Provider value={{ state, setState }}>\n      {children}\n    </UserContext.Provider>\n  );\n};\n\nconst useUser = () => {\n  const { state, setState } = useContext(UserContext);\n\n  const changeName = (name) => {\n    setState((prevState) => ({\n      ...prevState,\n      name,\n    }));\n  };\n\n  return {\n    changeName,\n    state,\n  };\n};\n\nconst App = () => {\n  return (\n    <UserProvider>\n      <Auth />\n      <Avatar />\n    </UserProvider>\n  );\n};\n\nconst Auth = () => {\n  const { changeName, state } = useUser();\n  const loading = useRef(false);\n\n  useEffect(() => {\n    const login = async () => {\n      if (loading.current) {\n        return;\n      }\n\n      loading.current = true;\n      const user = await auth();\n      changeName(user);\n    };\n\n    login();\n\n    return () => (loading.current = false);\n  }, [changeName, loading, state.name]);\n\n  return null;\n};\n\nconst Avatar = () => {\n  const { state } = useUser();\n  return <h1>Hello, {state.name}</h1>;\n};',
    },
    availableAnswer: [
      {
        id: 1,
        content:
          "В компоненте Avatar state будет undefined, что вызовет исключение",
      },
      {
        id: 2,
        content: "Компонент Auth будет вызывать бесконечные перерендеры",
      },
      {
        id: 3,
        content: "Компонент Auth будет дважды вызывать процесс авторизации",
      },
      {
        id: 4,
        content: "В коде всё нормально",
      },
    ],
    rightAnswer: 2,
  },
  {
    id: 66,
    type: "multiple",
    tags: ["react", "hooks", "senior++"],
    body: {
      type: "code snippet",
      content:
        '/**\n * Есть ли в баг в коде?\n */\nfunction useFetch(url, options) {\n  const cache = useRef({});\n  const cancelRequest = useRef(false);\n\n  const initialState = {\n    error: undefined,\n    data: undefined,\n  };\n\n  const fetchReducer = (state, action) => {\n    switch (action.type) {\n      case "loading":\n        return { ...initialState };\n      case "fetched":\n        return { ...initialState, data: action.payload };\n      case "error":\n        return { ...initialState, error: action.payload };\n      default:\n        return state;\n    }\n  };\n\n  const [state, dispatch] = useReducer(fetchReducer, initialState);\n\n  useEffect(() => {\n    if (!url) {\n      return;\n    }\n\n    cancelRequest.current = false;\n\n    const fetchData = async () => {\n      dispatch({ type: "loading" });\n\n      if (cache.current[url]) {\n        dispatch({ type: "fetched", payload: cache.current[url] });\n        return;\n      }\n\n      try {\n        const response = await fetch(url, options);\n\n        if (!response.ok) {\n          throw new Error(response.statusText);\n        }\n\n        const data = await response.json();\n        cache[url] = data;\n\n        if (cancelRequest.current) {\n          return;\n        }\n\n        dispatch({ type: "fetched", payload: data });\n      } catch (error) {\n        if (cancelRequest.current) {\n          return;\n        }\n        dispatch({ type: "error", payload: error });\n      }\n    };\n\n    fetchData();\n\n    return () => (cancelRequest.current = true);\n  }, [options, url]);\n\n  return state;\n}\n\nconst App = () => {\n  const result = useFetch(\n    "https://mocki.io/v1/178f9877-caa1-4fa6-8d2b-53d3229b9a07",\n    { headers: { "Content-Type": "application/json" } }\n  );\n\n  return null;\n};',
    },
    availableAnswer: [
      { id: 1, content: "Бесконечный перерендер" },
      { id: 2, content: "Неправильная работа кеширование" },
      { id: 3, content: "Неправильная работа прерывания запросов" },
      { id: 4, content: "Неправильная работа редюсера" },
    ],
    rightAnswer: [1, 2],
  },
  {
    id: 67,
    type: "single",
    tags: ["react", "hooks", "senior"],
    body: {
      type: "code snippet",
      content:
        "/**\n * Есть ли проблемы в данном коде?\n */\nfunction useTimeout(callback, delay) {\n  const savedCallback = useRef(callback);\n\n  useEffect(() => {\n    savedCallback.current = callback;\n\n    if (!delay && delay !== 0) {\n      return;\n    }\n\n    const id = setTimeout(() => savedCallback.current(), delay);\n    return () => clearTimeout(id);\n  }, [callback, delay]);\n}\n\nconst App = () => {\n  const [visible, setVisible] = useState(true);\n  const hide = () => setVisible(false);\n  const show = () => setVisible(true);\n\n  useTimeout(hide, 5000);\n\n  return (\n    <>\n      {visible && <div>Visible</div>}\n      <button onClick={show}>Show</button>\n    </>\n  );\n};",
    },
    availableAnswer: [
      {
        id: 1,
        content:
          "Обновление рефа внутри useEffect будет вызывать бесконечные перерендеры",
      },
      {
        id: 2,
        content:
          "Передача в useTimeout не мемоизированного callback будет вызывать бесконечный перерендер",
      },
      {
        id: 3,
        content:
          "Вызов callback внутри setTimeout с изменением состояния компонента будет вызывать бесконечный перерендер",
      },
      {
        id: 4,
        content: "Всё в порядке",
      },
    ],
    rightAnswer: 4,
  },
  {
    id: 68,
    type: "single",
    tags: ["react", "context", "senior+"],
    body: {
      type: "code snippet",
      content:
        "/**\n * Какое будет значение контекста если нажать Increase?\n */\nconst GlobalContext = createContext({ count: 0 });\nconst LocalContext = createContext({ count: 0 });\n\nconst App = () => {\n  const [count, setCount] = useState(0);\n  const increaseByTwo = () => setCount((p) => p + 2);\n\n  return (\n    <GlobalContext.Provider value={{ count, setCount }}>\n      <GlobalContext.Consumer>\n        {({ count, setCount }) => (\n          <LocalComp count={count} setCount={setCount} />\n        )}\n      </GlobalContext.Consumer>\n      <button onClick={increaseByTwo}>IncreaseByTwo</button>\n    </GlobalContext.Provider>\n  );\n};\n\nconst LocalComp = ({ count, setCount }) => {\n  const increase = () => setCount((p) => p + 1);\n\n  return (\n    <LocalContext.Provider value={{ count, increase }}>\n      <LocalContext.Consumer>\n        {({ count, increase }) => (\n          <>\n            <div>{count}</div>\n            <button onClick={increase}>Increase</button>\n          </>\n        )}\n      </LocalContext.Consumer>\n    </LocalContext.Provider>\n  );\n};",
    },
    availableAnswer: [
      { id: 1, content: "Global: 0, Local: 0" },
      {
        id: 2,
        content: "Global: 0, Local: 1",
      },
      {
        id: 3,
        content: "Global: 1, Local: 1",
      },
      {
        id: 4,
        content: "Ошибка",
      },
    ],
    rightAnswer: 3,
  },
  {
    id: 69,
    type: "single",
    tags: ["react", "context", "middle++"],
    body: {
      type: "code snippet",
      content:
        "/**\n * Какие значения будут внутри h1, при перерендере?\n */\nconst Context = createContext();\n\nconst App = () => {\n  const value = Math.random();\n  const [count, setCount] = useState(0);\n  const increase = () => setCount((p) => p + 1);\n\n  return (\n    <Context.Provider value={value}>\n      <Context.Consumer>{(value) => <h1>{value}</h1>}</Context.Consumer>\n\n      <button onClick={increase}>Increase</button>\n    </Context.Provider>\n  );\n};",
    },
    availableAnswer: [
      { id: 1, content: "каждый раз новое" },
      { id: 2, content: "каждый раз одно и то же" },
      {
        id: 3,
        content:
          "реакт вызовет ошибку так как нельзя обновлять value таким образом",
      },
      {
        id: 4,
        content: "реакт вызовет ошибку так как value должен быть объектом",
      },
    ],
    rightAnswer: 1,
  },
  {
    id: 70,
    type: "single",
    tags: ["react", "ref", "middle+"],
    body: {
      type: "code snippet",
      content:
        "/**\n * Есть ли в данном коде ошибка?\n */\nconst App = () => {\n  const ref = useRef();\n\n  return <Component ref={ref} />;\n};\n\nexport default App;\n\nconst Component = forwardRef(({ ref }) => {\n  return <h1 ref={ref}>Hello</h1>;\n});\n",
    },
    availableAnswer: [
      { id: 1, content: "Да, необходимо задать начальное значение в useRef" },
      {
        id: 2,
        content:
          "В функциональные компоненты нельзя передавать рефы, только в классовые",
      },
      { id: 3, content: "Неправильно использование рефа в Component" },
      { id: 4, content: "В этом коде нет ошибок" },
    ],
    rightAnswer: 3,
  },
  {
    id: 71,
    type: "single",
    tags: ["react", "ref", "junior"],
    body: "Как создать реф внутри функционального компонента",
    availableAnswer: [
      { id: 1, content: "React.createRef()" },
      { id: 2, content: "React.useRef()" },
      { id: 3, content: "React.forwartRef()" },
      {
        id: 4,
        content: "Внутри функциональных компонентов нельзя создать реф",
      },
    ],
    rightAnswer: 2,
  },
  {
    id: 72,
    type: "single",
    tags: ["react", "ref", "middle"],
    body: {
      type: "code snippet",
      content:
        '/**\n * Есть ли в данном коде ошибка\n */\nconst App = () => {\n  const ref = useRef();\n\n  const retriveData = () => {\n    console.dir(ref.current.dataset.title);\n  };\n\n  return (\n    <>\n      <Component ref={ref} />\n      <button onClick={retriveData}>Retrive</button>\n    </>\n  );\n};\n\nconst Component = forwardRef((props, ref) => {\n  return (\n    <h1 ref={ref} data-title="Very interesting">\n      Hello\n    </h1>\n  );\n});',
    },
    availableAnswer: [
      {
        id: 1,
        content: "Код рабочий",
      },
      {
        id: 2,
        content: "Вместо data-title нужно использовать dataTitle",
      },
      {
        id: 3,
        content: "Рефы нельзя использовать в функциональных компонентах",
      },
      {
        id: 4,
        content:
          "Неправильно используется forwardRef, нужно forwardRef((prop) => {/*код компонента*/}, ref)",
      },
    ],
    rightAnswer: 1,
  },
  {
    id: 73,
    type: "single",
    tags: ["react", "senior+", "ref"],
    body: {
      type: "code snippet",
      content:
        "/**\n * Какое значение будет выведено внутри PreviousValue\n * после двух нажатий на кнопку Increase\n */\nconst App = () => {\n  const prevValue = useRef(0);\n\n  return (\n    <>\n      <PreviousValue value={prevValue.current} />\n      <Counter ref={prevValue} />\n    </>\n  );\n};\n\nconst PreviousValue = ({ value }) => <div>Previous value: {value}</div>;\n\nconst Counter = forwardRef((_, prevValue) => {\n  const [value, setValue] = useState(0);\n\n  const increase = () => {\n    prevValue.current = value;\n    setValue(value + 1);\n  };\n\n  return (\n    <>\n      <div>CurrentValue: {value}</div>\n      <button onClick={increase}>Increase</button>\n    </>\n  );\n});",
    },
    availableAnswer: [
      { id: 1, content: "0" },
      { id: 2, content: "1" },
      { id: 3, content: "2" },
      { id: 4, content: "React вызовет исключение" },
    ],
    rightAnswer: 1,
  },
  {
    id: 74,
    type: "single",
    tags: ["react", "senior", "ref"],
    body: {
      type: "code snippet",
      content:
        '/**\n * Будет ли данный код работать корректно.\n * При нажании на кнопку Logout, показываем, что пользователь "user"?\n */\nfunction useForceUpdate() {\n  const [value, setValue] = useState(0);\n  const update = () => setValue(value + 1);\n  return update;\n}\n\nconst UserContext = createContext("user");\n\nconst App = () => {\n  const user = useRef("Bob");\n  const setUser = (name) => {\n    user.current = name;\n  };\n\n  return (\n    <UserContextProvider user={{ user, setUser }}>\n      <Avatar />\n    </UserContextProvider>\n  );\n};\n\nconst UserContextProvider = ({ user, children }) => {\n  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;\n};\n\nconst Avatar = () => {\n  const { user, setUser } = useContext(UserContext);\n  const update = useForceUpdate();\n\n  const logout = () => {\n    setUser("user");\n    update();\n  };\n\n  return (\n    <>\n      <h1>{user.current}</h1>\n      <button onClick={logout}>Logout</button>\n    </>\n  );\n};',
    },
    availableAnswer: [
      { id: 1, content: "Да, всё ок" },
      {
        id: 2,
        content: "Нет, изменение рефа, не вызывает обновление интерфейса",
      },
      {
        id: 3,
        content: "Нет, хук useForceUpdate работает не правильно",
      },
      {
        id: 4,
        content:
          "Нет, контекст будет хранить одну и ту же ссылку value и обновляться не будет",
      },
    ],
    rightAnswer: 1,
  },
  {
    id: 75,
    type: "multiple",
    tags: ["react", "senior++", "ref"],
    body: {
      type: "code snippet",
      content:
        "/**\n * Как исправить данный код?\n * Нажимая на кнопку Next показывается след слайд\n */\nconst Services = createContext({});\nconst App = () => {\n  const sliderRef = useRef(null);\n  const slides = [1, 2, 3];\n\n  return (\n    <Services.Provider\n      value={{\n        slider: sliderRef.current, // 1\n      }}\n    >\n      <Slider slides={slides} ref={sliderRef} />\n      <DeepComponent />\n    </Services.Provider>\n  );\n};\n\n// 2\nconst Slider = forwardRef(({ slides }, ref) => {\n  const [current, setCurrent] = useState(0);\n\n  // 3\n  useImperativeHandle(ref.current, () => ({\n    // 4\n    next: () => setCurrent((p) => (p + 1 === slides.length ? 0 : p + 1)),\n  }));\n\n  return <div>{slides[current]}</div>;\n});\n\nconst DeepComponent = () => {\n  const { slider } = useContext(Services);\n\n  const onNextClick = () => {\n    // 5\n    const { next } = slider;\n    next();\n  };\n\n  return <button onClick={onNextClick}>Next</button>;\n};",
    },
    availableAnswer: [
      {
        id: 1,
        content: "[1] Нужно заменить на slider: () => sliderRef.current",
      },
      {
        id: 2,
        content:
          "[2] Нужно заменить const Slider = forwardRef(({slides, ref}) => { func body })",
      },
      {
        id: 3,
        content:
          "[3] Нужно заменить на useImperativeHandle(ref, () => ({ object })",
      },
      {
        id: 4,
        content:
          "[4] Нужно заменить на next: () => setCurrent(current + 1 === slides.length ? 0 : current + 1)",
      },
      {
        id: 5,
        content: "[5] Нужно заменить на const { next } = slider();",
      },
      {
        id: 6,
        content: "Код рабочий!",
      },
    ],
    rightAnswer: [1, 3, 5],
  },
];
