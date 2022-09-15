import {
  forwardRef,
  useImperativeHandle,
  useState,
  useRef,
  useEffect,
} from "react";

const App = () => {
  const sliderRef = useRef(null);
  const slides = [1, 2, 3];

  useEffect(() => {
    const timerId = setInterval(() => {
      sliderRef.current?.next();
    }, 2000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <>
      <h1>Awesome slider</h1>
      <button onClick={sliderRef.current?.prev}>Prev</button>
      <Slider slides={slides} ref={sliderRef} />
      <button onClick={sliderRef.current?.next}>Next</button>
    </>
  );
};

const Slider = forwardRef(({ slides }, ref) => {
  const [current, setCurrent] = useState(0);

  useImperativeHandle(ref, () => ({
    next: () => setCurrent((p) => (p + 1 === slides.length ? 0 : p + 1)),
    prev: () => setCurrent((p) => (p - 1 === -1 ? slides.length - 1 : p - 1)),
  }));

  return (
    <div>
      <div>{slides[current]}</div>
    </div>
  );
});

Slider.displayName = "Slider";

export default App;
