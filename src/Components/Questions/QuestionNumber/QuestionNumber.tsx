import { ReactNode } from "react";

type QuestionNumberProps = {
  children: ReactNode;
};

const QuestionNumber = ({ children }: QuestionNumberProps) => {
  return <h1>Вопрос № {children}.</h1>;
};

export default QuestionNumber;
