import { QuestionBody } from "Entities/Question";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

type QuestionBodyProps = {
  body: QuestionBody;
};

const QuestionBody = ({ body }: QuestionBodyProps) => {
  if (typeof body === "string") {
    return <p>{body}</p>;
  }

  if (body.type === "code snippet") {
    return (
      <SyntaxHighlighter language="javascript">
        {body.content}
      </SyntaxHighlighter>
    );
    return null;
  }

  return null;
};

export default QuestionBody;
