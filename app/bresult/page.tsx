"use client"
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";


export default function ResultPage() {
    const router = useRouter()
    const myObject = {
        score: setForm.size,
        totalQuestion: newList.length 
        
    }
    const params = useSearchParams();
  return (

    <div className="bg-green-200 w-[200px]">
      <button onClick={() => {
     router.push({
       pathname: "/bresult",
       query: { data: JSON.stringify(myObject) },
     });
   }}>Submit</button>
      <button>Cancel</button>
    </div>
  );
}
