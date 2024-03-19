import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { IListQuestion } from "./data";
import style from "./question.module.scss";

export default function Question(props: {
  data: IListQuestion;
  setIsVerify: Dispatch<
    SetStateAction<{
      hasSelected: boolean;
      selectedAnsIndex: number;
    }>
  >;
}) {
  const [selectedAnswer, setSelectedAnswer] = useState(1);
  useEffect(() => {
    props.setIsVerify({
      hasSelected: false,
      selectedAnsIndex: 0,
    });
  }, []);

  return (
    <div className={style.questionDiv}>
      <p
        style={{
          color: "rgb(123, 186, 29)",
          fontWeight: "bolder",
          marginBottom: "10px",
        }}
      >
        {props.data.question}
      </p>
      <p
        className={selectedAnswer == 1 ? style.selected : style.unselected}
        onClick={() => {
          setSelectedAnswer(1);
          props.setIsVerify({
            hasSelected: true,
            selectedAnsIndex: 1,
          });
          console.log(
            `Selected Ans${selectedAnswer} Q Ans:${props.data.answerIndex}`
          );
        }}
      >
        a. {props.data.optionA}
      </p>

      <p
        className={selectedAnswer == 2 ? style.selected : style.unselected}
        onClick={() => {
          setSelectedAnswer(2);

          props.setIsVerify({
            hasSelected: true,
            selectedAnsIndex: 2,
          });
          console.log(
            `Selected Ans${selectedAnswer} Q Ans:${props.data.answerIndex}`
          );
        }}
      >
        b. {props.data.optionB}
      </p>

      <p
        className={selectedAnswer == 3 ? style.selected : style.unselected}
        onClick={() => {
            setSelectedAnswer(3);
          props.setIsVerify({
            hasSelected: true,
            selectedAnsIndex: 3,
          });
          console.log(
            `Selected Ans: ${selectedAnswer} Q Ans:${props.data.answerIndex}`
          );
        }}
      >
        c. {props.data.optionC}
      </p>
    </div>
  );
}
