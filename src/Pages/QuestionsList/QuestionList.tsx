import BooleanQuestionReview from "Components/Questions/BooleanQuestionReview";
import MultipleAnswerQuestionReview from "Components/Questions/MultipleAnswerQuestionReview";
import SingleAnswerQuestionReview from "Components/Questions/SingleAnswerQuestionReview";
import { questions } from "Data/ReactQuestions";

const QuestionsListPage = () => {
  return (
    <div>
      <h1>Вопросы</h1>

      {questions.map((q) => {
        if (q.type === "boolean") {
          return <BooleanQuestionReview {...q} />;
        }

        if (q.type === "multiple") {
          return <MultipleAnswerQuestionReview {...q} />;
        }

        if (q.type === "single") {
          return <SingleAnswerQuestionReview {...q} />;
        }
      })}
    </div>
  );
};

export default QuestionsListPage;
