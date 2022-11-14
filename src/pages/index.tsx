import { useState } from "react";
import Question from "../components/Question";
import QuestionModel from "../model/question";
import ResponseModel from "../model/response";

const questionMock = new QuestionModel(1, "Qual é a melhor cor?", [
  ResponseModel.incorrect("Verde"),
  ResponseModel.incorrect("Azul"),
  ResponseModel.incorrect("Amarelo"),
  ResponseModel.correct("Cinza"),
]);

export default function Home() {
  const [question, setQuestion] = useState(questionMock);

  const onResponse = (index: number) => {
    setQuestion(question.answerWith(index));
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Question value={question} onResponse={onResponse} />
    </div>
  );
}
