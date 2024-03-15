"use client";
import { SetStateAction, useState } from "react";
import { ListQuestion } from "./data";
import style from "./question.module.scss";
import { useSearchParams } from "next/navigation";
import Question from "./question";
import { useRouter } from "next/navigation";

export default function QuestionPage() {
  const router = useRouter();
  const params = useSearchParams();
  const [questionIndex, setQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState<number[]>([]);
  const [isOptionVerify, setIsOptionVerify] = useState({
    hasSelected: false,
    selectedAnsIndex: 0,
  });

  const newList = ListQuestion.filter(
    (item, index) => item.category === params.get("category")
  );

  const currentQuestion = ListQuestion.filter(
    (item, index) => index == questionIndex
  )[0];

  const nextClick = () => {
    if (!isOptionVerify.hasSelected) {
      return;
    }
    if (currentQuestion.answerIndex === isOptionVerify.selectedAnsIndex) {
      setCorrectAnswers([...correctAnswers, isOptionVerify.selectedAnsIndex]);
    }

    if (newList.length == questionIndex + 1) {
      return;
    }
    setQuestionIndex(questionIndex + 1);
  };

  const previousClick = () => {
    if (questionIndex == 0) {
      return;
    }
    setQuestionIndex(questionIndex - 1);
  };

  const handleSubmit = () => {
    if (!isOptionVerify.hasSelected) {
      return;
    }
    router.push("/bresult", );
  };

  return (
    <div className={style.layout}>
      <p className={style.p}>
        {questionIndex + 1} / {newList.length}
      </p>
      <p className={style.p}>{correctAnswers.length}</p>

      <div className={style.questionSection}>
        {newList.map((list, index) => {
          if (questionIndex == index) {
            return (
              <Question
                data={list}
                key={index}
                setIsVerify={setIsOptionVerify}
              />
            );
          } else {
            return <div></div>;
          }
        })}
      </div>

      <div className={style.buttons}>
        {questionIndex == 0 || (
          <button
            onClick={previousClick}
            style={{
              // paddingLeft: "100px",
              fontWeight: "bolder",
              color: "rgb(123, 186, 29)",
            }}
          >
            Previous
          </button>
        )}

        {questionIndex + 1 == newList.length || (
          <button
            onClick={nextClick}
            style={{
              // paddingRight: "100px",
              fontWeight: "bolder",
              color: "rgb(123, 186, 29)",
            }}
          >
            Next
          </button>
        )}
        {questionIndex + 1 == newList.length && (
          <button
            onClick={handleSubmit}
            style={{
              // paddingRight: "100px",
              fontWeight: "bolder",
              color: "rgb(29, 162, 186)",
            }}
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
}
