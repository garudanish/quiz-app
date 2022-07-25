import React, { useState } from "react";
import styles from "../styles/QuizContent.module.css";

const AnswerBtn = ({
  isCorrect,
  children,
  setQuizCount,
  isAnswerClicked,
  setIsAnswerClicked,
}) => {
  const [isClicked, setIsClicked] = useState(false);

  const clickAnswer = () => {
    setIsClicked(true);
    setIsAnswerClicked(true);
    setTimeout(() => {
      setQuizCount((prev) => prev + 1);
      setIsAnswerClicked(false);
    }, 1000);
  };

  return (
    <button
      className={`${styles.answer} ${
        isClicked && (isCorrect ? styles.correct : styles.wrong)
      } ${isAnswerClicked && isCorrect && styles.correct}`}
      onClick={clickAnswer}
      disabled={isAnswerClicked}
    >
      {children}
    </button>
  );
};

export default AnswerBtn;
