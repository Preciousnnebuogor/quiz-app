"use client";
import { useSearchParams } from "next/navigation";

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
      <button>Submit</button>
      <button>Cancel</button>
    </div>
  );
}
