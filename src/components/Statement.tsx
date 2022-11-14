import React from "react";
import styles from "../styles/Statement.module.css";

interface IStatementProps {
  text: string;
}

const Statement: React.FC<IStatementProps> = (props) => {
  return (
    <div className={styles.statement}>
      <span className={styles.text}>{props.text}</span>
    </div>
  );
};

export default Statement;
