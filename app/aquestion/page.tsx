"use client";
import { useState } from "react";
import { ListQuestion } from "./data";
import style from "./question.module.scss";
import { useSearchParams } from "next/navigation";

export default function Question() {
  const params = useSearchParams();
  const [questionIndex, setQuestionIndex] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(0);

  const newList = ListQuestion.filter(
    (item, index) => item.category === params.get("category")
  );

  const nextClick = () => {
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
      <p>
        {questionIndex + 1} / {newList.length}
      </p>
      <div className={style.questionSection}>
        {newList.map((list, index) => {
          if (questionIndex == index) {
            return (
              <div key={index} className={style.questionDiv}>
                <p>{list.question}</p>
                <p>a. {list.optionA}</p>
                <p>b. {list.optionB}</p>
                <p>c. {list.optionC}</p>
              </div>
            );
          } else {
            return <div></div>;
          }
        })}
      </div>

      <div>
        <div>
          <button onClick={nextClick}>Next</button>
          {questionIndex == 0 ? (
            <div></div>
          ) : (
            <button onClick={previousClick}>Previous</button>
          )}
        </div>
      </div>
    </div>
  );
}
