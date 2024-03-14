import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { IListQuestion } from "./data";
import style from "./question.module.scss";

export default function Question(props: {
  data: IListQuestion;
  setIsVerify: Dispatch<SetStateAction<boolean>>;
}) {
  const [selectedAnswer, setSelectedAnswer] = useState(0);
  useEffect(() => {
    props.setIsVerify(false);
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
          props.setIsVerify(true);
        }}
      >
        a. {props.data.optionA}
      </p>

      <p
        className={selectedAnswer == 2 ? style.selected : style.unselected}
        onClick={() => {
          setSelectedAnswer(2);
          props.setIsVerify(true);
        }}
      >
        b. {props.data.optionB}
      </p>

      <p
        className={selectedAnswer == 3 ? style.selected : style.unselected}
        onClick={() => {
          setSelectedAnswer(3);
          props.setIsVerify(true);
        }}
      >
        c. {props.data.optionC}
      </p>
    </div>
  );
}
