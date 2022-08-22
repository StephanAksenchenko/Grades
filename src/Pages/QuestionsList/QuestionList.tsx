import FilterByTag from "Components/Questions/ FilterByTag/FilterByTag";
import BooleanQuestionReview from "Components/Questions/BooleanQuestionReview";
import MultipleAnswerQuestionReview from "Components/Questions/MultipleAnswerQuestionReview";
import SingleAnswerQuestionReview from "Components/Questions/SingleAnswerQuestionReview";
import { questions } from "Data/ReactQuestions";
import css from "./QuestionList.module.scss";

const QuestionsListPage = () => {
  return (
    <div className={css.root}>
      <h1 className={css.h1}>Вопросы</h1>

      {questions
        .filter((q) => q.tags.includes("props"))
        .map((q) => {
          return (
            <div key={q.id} className={css.card}>
              {q.type === "boolean" && <BooleanQuestionReview {...q} />}
              {q.type === "multiple" && <MultipleAnswerQuestionReview {...q} />}
              {q.type === "single" && <SingleAnswerQuestionReview {...q} />}
            </div>
          );
        })}
    </div>
  );
};

export default QuestionsListPage;
