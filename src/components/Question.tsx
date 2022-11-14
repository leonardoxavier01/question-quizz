import React from "react";
import QuestionModel from "../model/question";
import styles from "../styles/Question.module.css";
import Response from "./Response";
import Statement from "./Statement";

const letters = [
  { value: "A", color: "#f2c866" },
  { value: "B", color: "#f266BA" },
  { value: "C", color: "#85D4F2" },
  { value: "D", color: "#BCE596" },
];

interface IQuestionProps {
  value: QuestionModel;
  onResponse: (index: number) => void;
}

const Question: React.FC<IQuestionProps> = (props) => {
  const question = props.value;

  const renderResponses = () => {
    return question.responses.map((resp, i) => {
      return (
        <Response
          key={i}
          value={resp}
          index={i}
          letter={letters[i].value}
          backgroundLetter={letters[i].color}
          onResponse={props.onResponse}
        />
      );
    });
  };

  return (
    <div className={styles.question}>
      <Statement text={question.statement} />
      {renderResponses()}
    </div>
  );
};

export default Question;
