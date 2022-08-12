import { ReactNode } from "react";
import css from "./QuestionRightAnswer.module.scss";

type QuestionRightAnswerProps = {
  children: ReactNode;
};

const QuestionRightAnswer = ({ children }: QuestionRightAnswerProps) => {
  return (
    <div>
      <p>Правильный ответ:</p>
      <div className={css.root}>{children}</div>
    </div>
  );
};

export default QuestionRightAnswer;
