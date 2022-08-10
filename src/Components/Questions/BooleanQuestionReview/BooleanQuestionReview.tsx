import { BooleanQuestion } from "Entities/Question";
import Tags from "Components/Shared/Tags";
import QuestionNumber from "Components/Questions/QuestionNumber";
import QuestionBody from "Components/Questions/QuestionBody";
import QuestionRightAnswer from "../QuestionRightAnswer";

const BooleanQuestionReview = ({
  id,
  body,
  rightAnswer,
  tags,
}: BooleanQuestion) => {
  return (
    <div>
      <QuestionNumber>{id}</QuestionNumber>
      <Tags tags={tags} />
      <QuestionBody body={body} />
      <QuestionRightAnswer>{rightAnswer ? "Да" : "Нет"}</QuestionRightAnswer>
    </div>
  );
};

export default BooleanQuestionReview;
