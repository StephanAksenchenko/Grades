import { MultipleAnswerQuestion } from "Entities/Question";
import QuestionNumber from "Components/Questions/QuestionNumber";
import QuestionBody from "Components/Questions/QuestionBody";
import Tags from "Components/Shared/Tags";
import css from "./MultipleAnswerQuestionReview.module.scss";
import QuestionRightAnswer from "../QuestionRightAnswer";

const MultipleAnswerQuestionReview = ({
  id,
  tags,
  body,
  availableAnswer,
  rightAnswer,
}: MultipleAnswerQuestion) => {
  return (
    <div>
      <QuestionNumber>{id}</QuestionNumber>
      <Tags tags={tags} />
      <QuestionBody body={body} />
      <ul className={css.answers}>
        {availableAnswer.map((answer, i) => (
          <li key={i}>{answer.content}</li>
        ))}
      </ul>
      <QuestionRightAnswer>
        <ul className={css.answers}>
          {rightAnswer.map((answerId, id) => {
            const answer = availableAnswer.find(
              (answer) => answer.id === answerId
            );

            return answer && <li key={id}>{answer.content}</li>;
          })}
        </ul>
      </QuestionRightAnswer>
    </div>
  );
};

export default MultipleAnswerQuestionReview;
