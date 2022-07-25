import React, { useState, useEffect } from "react";
import he from "he";
import { shuffle } from "../lib/utils";
import AnswerBtn from "./AnswerBtn";

const QuizContent = ({ quizObj, setQuizCount }) => {
  const [isAnswerClicked, setIsAnswerClicked] = useState(false);
  const [shuffledAnswers, setShuffledAnswers] = useState([]);

  const { category, correct_answer, difficulty, incorrect_answers, question } =
    quizObj;

  useEffect(() => {
    const incorrectAnswersMap = incorrect_answers.map((answer) => ({
      isCorrect: false,
      content: he.decode(answer),
    }));

    setShuffledAnswers(
      shuffle([
        ...incorrectAnswersMap,
        { isCorrect: true, content: he.decode(correct_answer) },
      ])
    );
  }, [correct_answer, incorrect_answers]);

  return (
    <div>
      <h2>{he.decode(question)}</h2>
      {shuffledAnswers.map(({ content, isCorrect }) => (
        <AnswerBtn
          key={content}
          isCorrect={isCorrect}
          setQuizCount={setQuizCount}
          isAnswerClicked={isAnswerClicked}
          setIsAnswerClicked={setIsAnswerClicked}
        >
          {content}
        </AnswerBtn>
      ))}
    </div>
  );
};

export default QuizContent;
