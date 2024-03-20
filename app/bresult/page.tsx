"use client";
import { useSearchParams } from "next/navigation";
import style from "./resultpage.module.scss"


export default function ResultPage() {
  const params = useSearchParams();
  const score = params.get("score");
  return (
    <div className="bg-green-200 w-[200px]">
      <p style={{
              paddingLeft: "100px",
              fontWeight: "bolder",
              color: "rgb(123, 186, 29)",
            }}>{score}</p>
            <div className={style.button}>
      <button>Submit</button>
      <button>Cancel</button>
      </div>
    </div>
  );
}
