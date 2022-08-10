import { ReactNode } from "react";
import css from "./QuestionRightAnswer.module.scss";

type QuestionRightAnswerProps = {
  children: ReactNode;
};

const QuestionRightAnswer = ({ children }: QuestionRightAnswerProps) => {
  return (
    <div>
      <p>Правильный ответ:</p>
      <p className={css.root}>{children}</p>
    </div>
  );
};

export default QuestionRightAnswer;
