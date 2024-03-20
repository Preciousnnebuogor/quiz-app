"use client";
import { useSearchParams } from "next/navigation";
import style from "./resultpage.module.scss"


export default function ResultPage() {
  const params = useSearchParams();
  const score = params.get("score");


//   

function displayText() {
    const text = document.getElementById("textField");
    
  }
  

  return (
    <div className={style.home}>
      <p style={{
              paddingLeft: "50%",
              fontWeight: "bolder",
              color: "rgb(123, 186, 29)",
              marginTop: "5%"
            }}>{score}</p>
            
            <div className={style.buttons}>
      <button className={style.button} onCl>Submit</button>
      <div>
  This is the text that appears when you click the button.
</div>

      <button className={style.button}>Cancel</button>
      </div>
    </div>
  );
}
