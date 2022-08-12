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
  {
    id: 14,
    type: "single",
    tags: ["react", "junior"],
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
    tags: ["junior", "react"],
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
    tags: ["junior", "react"],
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
    tags: ["react", "junior"],
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
    tags: ["react", "junior"],
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
    tags: ["react", "junior"],
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
    tags: ["react", "junior"],
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
    tags: ["react", "junior"],
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
    tags: ["react", "junior"],
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
    tags: ["react", "junior"],
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
    tags: ["react", "junior"],
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
    tags: ["react", "junior"],
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
    tags: ["react", "junior"],
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
    tags: ["react", "junior"],
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
    tags: ["react", "junior"],
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
    tags: ["react", "junior"],
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
    tags: ["react", "junior"],
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
    tags: ["react", "junior"],
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
    tags: ["react", "junior"],
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
    tags: ["react", "junior"],
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
    tags: ["react", "junior"],
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
    tags: ["react", "context"],
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
    tags: ["react", "context"],
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
    tags: ["react", "context"],
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
    tags: ["react", "context"],
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
    tags: ["react", "context"],
    body: {
      type: "code snippet",
      content:
        '/**\n * App отрисовывает два счётчика, у которых есть span,\n * для отображения значения счётчика и есть кнопка, увеличивающая значение счётчиа на один.\n * Если у каждого счётчика нажать один раз кнопку Increment, каковы будут значения счётчиков\n */\nconst Context = createContext("value");\n\nconst App = () => {\n  return (\n    <>\n      <Counter />\n      <Counter />\n    </>\n  );\n};\n\nconst Counter = () => {\n  const [state, setState] = useState(0);\n  const increment = () => setState(state + 1);\n\n  return (\n    <>\n      <Context.Provider value={{ state, setState }}>\n        <Context.Consumer>\n          {(value) => <span>{value.state}</span>}\n        </Context.Consumer>\n      </Context.Provider>\n      <button onClick={increment}>Increment</button>\n    </>\n  );\n};',
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
    tags: ["react", "context"],
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
    tags: ["react", "hooks"],
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
    tags: ["react", "hooks"],
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
    tags: ["react"],
    body: {
      type: "code snippet",
      content:
        '/**\n * Есть ли в данном примере проблемы с утечкой памяти?\n */\nconst App = () => {\n  const onScroll = useCallback(() => console.log(window.scrollY), []);\n\n  useEffect(() => {\n    window.addEventListener("scroll", onScroll);\n  }, [onScroll]);\n\n  return <div />;\n};',
    },
    rightAnswer: false,
  },
];
