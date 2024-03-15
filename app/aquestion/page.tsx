"use client";
import { SetStateAction, useState } from "react";
import { ListQuestion } from "./data";
import style from "./question.module.scss";
import { useSearchParams } from "next/navigation";
import Question from "./question";

export default function QuestionPage() {
  const params = useSearchParams();
  const [questionIndex, setQuestionIndex] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [isOptionVerify, setIsOptionVerify] = useState(false);

  const newList = ListQuestion.filter(
    (item, index) => item.category === params.get("category")
  );

  const nextClick = () => {
    if (!isOptionVerify) {
      return;
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

  return (
    <div className={style.layout}>
      <p className={style.p}>
        {questionIndex + 1} / {newList.length}
      </p>

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
      </div>
    </div>
  );
}
