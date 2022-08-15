import { useCallback, useEffect } from "react";

/**
 * Есть ли в данном примере проблемы с утечкой памяти?
 */
const App = () => {
  const onScroll = useCallback(() => console.log(window.scrollY), []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  }, [onScroll]);

  return <div />;
};

export default App;
