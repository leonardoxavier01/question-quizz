import React from "react";
import ResponseModel from "../model/response";
import styles from "../styles/Response.module.css";

interface IResponseProps {
  value: ResponseModel;
  index: number;
  letter: string;
  backgroundLetter: string;
  onResponse: (index: number) => void
}

const Response: React.FC<IResponseProps> = (props) => {
  const response = props.value;

  return (
    <div className={styles.response} onClick={()=> props.onResponse(props.index)}>
      <div className={styles.contentResponse}>
        <div className={styles.front}>
          <div
            className={styles.letter}
            style={{ backgroundColor: props.backgroundLetter }}
          >
            {props.letter}
          </div>
          <div className={styles.value}>{response.value}</div>
        </div>
        <div className={styles.back}></div>
      </div>
    </div>
  );
};

export default Response;
