import { useEffect, useReducer, useRef, useState } from "react";

/**
 * Есть ли в баг в коде?
 */
function useFetch(url, options) {
  const cache = useRef({});
  const cancelRequest = useRef(false);

  const initialState = {
    error: undefined,
    data: undefined,
  };

  const fetchReducer = (state, action) => {
    switch (action.type) {
      case "loading":
        return { ...initialState };
      case "fetched":
        return { ...initialState, data: action.payload };
      case "error":
        return { ...initialState, error: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    if (!url) {
      return;
    }

    cancelRequest.current = false;

    const fetchData = async () => {
      dispatch({ type: "loading" });

      if (cache.current[url]) {
        dispatch({ type: "fetched", payload: cache.current[url] });
        return;
      }

      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const data = await response.json();
        cache[url] = data;

        if (cancelRequest.current) {
          return;
        }

        dispatch({ type: "fetched", payload: data });
      } catch (error) {
        if (cancelRequest.current) {
          return;
        }
        dispatch({ type: "error", payload: error });
      }
    };

    fetchData();

    return () => (cancelRequest.current = true);
  }, [options, url]);

  return state;
}

const App = () => {
  const result = useFetch(
    "https://mocki.io/v1/178f9877-caa1-4fa6-8d2b-53d3229b9a07",
    { headers: { "Content-Type": "application/json" } }
  );

  return null;
};

export default App;
