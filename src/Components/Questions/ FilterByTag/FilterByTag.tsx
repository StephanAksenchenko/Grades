import Tags from "Components/Shared/Tags";
import { questions } from "Data/ReactQuestions";
import { Question } from "Entities/Question";

const FilterByTag = () => {
  const tags = Array.from(
    questions.reduce((res: Set<string>, cur: Question) => {
      for (let tag of cur.tags) {
        res.add(tag);
      }

      return res;
    }, new Set())
  );

  return <Tags tags={tags} />;
};

export default FilterByTag;
