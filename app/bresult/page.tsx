"use client"
import { useSearchParams } from "next/navigation";

export default function ResultPage() {
    const params = useSearchParams();
  return (
    <div className="bg-green-200 w-[200px]">
      <button>Submit</button>
      <button>Cancel</button>
    </div>
  );
}
