/**
 * Что будет выведено в консоль в итоге его работы?
 */
const Button = ({ borderless, children }) => {
  if (borderless) {
    console.log("borderless");
  } else {
    console.log("!borderless");
  }
  return <button>{children}</button>;
};

export default function App() {
  return <Button borderless>Button</Button>;
}
