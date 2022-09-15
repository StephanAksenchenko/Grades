import {
  forwardRef,
  useImperativeHandle,
  useState,
  useRef,
  createContext,
  useContext,
} from "react";

/**
 * Как исправить данный код?
 * Нажимая на кнопку Next показывается след слайд
 */
const Services = createContext({});
const App = () => {
  const sliderRef = useRef(null);
  const slides = [1, 2, 3];

  return (
    <Services.Provider
      value={{
        slider: () => sliderRef.current, // 1
      }}
    >
      <Slider slides={slides} ref={sliderRef} />
      <DeepComponent />
    </Services.Provider>
  );
};

// 2
const Slider = forwardRef(({ slides }, ref) => {
  const [current, setCurrent] = useState(0);

  // 3
  useImperativeHandle(ref, () => ({
    // 4
    next: () => setCurrent((p) => (p + 1 === slides.length ? 0 : p + 1)),
  }));

  return <div>{slides[current]}</div>;
});

const DeepComponent = () => {
  const { slider } = useContext(Services);

  const onNextClick = () => {
    // 5
    const { next } = slider();
    next();
  };

  return <button onClick={onNextClick}>Next</button>;
};

Slider.displayName = "Slider";

export default App;
