"use client";
import { useRouter, useSearchParams } from "next/navigation";
import style from "./resultpage.module.scss";

export default function ResultPage() {
  const router = useRouter();

  const params = useSearchParams();
  const score = params.get("score");

  function showAlert() {
    const myText = "Your answers has been submitted.Thanks for trying our app!";
    alert(myText);
  }

  return (
    <div className={style.home}>
      <p
        style={{
          paddingLeft: "50%",
          fontWeight: "bolder",
          color: "rgb(123, 186, 29)",
          marginTop: "5%",
        }}
      >
        {score}
      </p>

      <div className={style.buttons}>
        <button className={style.button} onClick={showAlert}>
          Submit
        </button>
        <button
          className={style.button}
          onClick={() => {
            router.push("/category");
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
