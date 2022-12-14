type Tag =
  | "react"
  | "props"
  | "jsx"
  | "junior"
  | "junior+"
  | "junior++"
  | "middle"
  | "middle+"
  | "middle++"
  | "senior"
  | "senior+"
  | "senior++"
  | "context"
  | "fragment"
  | "hooks"
  | "components"
  | "state"
  | "events"
  | "controlled components"
  | "optimization"
  | "ref"
  | "render-prop"
  | "strict mode"
  | "portals";

type QuestionAnswer = {
  id: number;
  content: string;
};

export type QuestionBody =
  | string
  | {
      type: "code snippet";
      content: string;
    };

type AbstractQuestion = {
  id: number;
  tags: Tag[];
  body: QuestionBody;
};

export type BooleanQuestion = AbstractQuestion & {
  type: "boolean";
  rightAnswer: boolean;
};

export type MultipleAnswerQuestion = AbstractQuestion & {
  type: "multiple";
  availableAnswer: QuestionAnswer[];
  rightAnswer: number[];
};

export type SingleAnswerQuestion = AbstractQuestion & {
  type: "single";
  availableAnswer: QuestionAnswer[];
  rightAnswer: number;
};

export type Question =
  | BooleanQuestion
  | MultipleAnswerQuestion
  | SingleAnswerQuestion;
