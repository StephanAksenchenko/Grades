import QuestionNumber from "../QuestionNumber";
import { SingleAnswerQuestion } from "Entities/Question";
import Tags from "Components/Shared/Tags";
import QuestionBody from "../QuestionBody";
import QuestionRightAnswer from "../QuestionRightAnswer";

const SingleQuestionReview = ({
  id,
  tags,
  body,
  availableAnswer,
  rightAnswer,
}: SingleAnswerQuestion) => {
  return (
    <div>
      <QuestionNumber>{id}</QuestionNumber>
      <Tags tags={tags} />
      <QuestionBody body={body} />
      <ul>
        {availableAnswer.map((answer, i) => (
          <li key={i}>{answer.content}</li>
        ))}
      </ul>
      <QuestionRightAnswer>
        <span>
          {availableAnswer.find((answer) => answer.id === rightAnswer)?.content}
        </span>
      </QuestionRightAnswer>
    </div>
  );
};

export default SingleQuestionReview;
