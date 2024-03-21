"use client";
import { useRouter, useSearchParams } from "next/navigation";
import style from "./resultpage.module.scss";

export default function ResultPage() {
  const router = useRouter();

  const params = useSearchParams();
  const score = params.get("score");

  return (
    <div className={style.home}>
      <p
        style={{
          paddingLeft: "50%",
          fontWeight: "bolder",
          color: "rgb(123, 186, 29)",
          marginTop: "5%",
          marginBottom: "5%"
        }}
      >
        {score}
      </p>
      <div className={style.text}>
        <h1>Congratulations for completing your quiz test!</h1>
        
        <h2>Click below to try again</h2>
      </div>
      <div className={style.submit}>
        <button onClick={()=> {router.push("/category")}}>Try Again</button>
    
      </div>
    </div>
  );
}
