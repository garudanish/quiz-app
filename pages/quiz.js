import React, { useEffect, useState } from "react";
import Head from "next/head";
import QuizContent from "../components/QuizContent";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

const Quiz = ({ data: { results } }) => {
  const [quizs, setQuizs] = useState([]);
  const [quizCount, setQuizCount] = useState(0);
  const router = useRouter();

  useEffect(() => {
    setQuizs(results);
  }, [results]);

  useEffect(() => {
    if (quizCount === 0) return;

    if (quizCount >= quizs.length) {
      router.push("/result");
    }
  }, [quizs, quizCount, router]);

  const currentQuiz = quizs[quizCount];

  return (
    currentQuiz && (
      <div className={styles.container}>
        <Head>
          <title>Quiz App</title>
          <meta charset="utf8" />
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <h1 className={styles.title}>QUIZ #{quizCount + 1}</h1>
          <QuizContent quizObj={currentQuiz} setQuizCount={setQuizCount} />
        </main>
      </div>
    )
  );
};

export async function getServerSideProps() {
  const res = await fetch(
    `https://opentdb.com/api.php?amount=10&type=multiple`
  );
  const data = await res.json();

  return { props: { data } };
}

export default Quiz;
