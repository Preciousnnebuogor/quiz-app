"use client";
import { useSearchParams } from "next/navigation";

export default function ResultPage() {
  const params = useSearchParams();
  const score = params.get("score");
  return (
    <div className="bg-green-200 w-[200px]">
      <p>{score}</p>
      <button>Submit</button>
      <button>Cancel</button>
    </div>
  );
}
