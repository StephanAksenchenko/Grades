type Tag =
  | "react"
  | "props"
  | "jsx"
  | "junior"
  | "junior+"
  | "junior++"
  | "context";

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
