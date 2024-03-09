"use client"
import Image from "next/image";
import style from "./hero.module.scss";
import { useRouter } from "next/navigation";

export default function Heros() {
  const router = useRouter();

  return (
    <div className={style.body}>
      <div className={style.img}>
        <Image src="/quiz.png" height="300" width="300" alt="" />
      </div>
      <div className={style.text}>
        <h1 className={style.h1}>BUZ WORLD</h1>
        <p className={style.p}>
          This app is built to encourage and enlighten you about different
          fields of study.
          <br /> It has 3 categories that enables you choose your field of
          study. <br /> Click the button below to start your quiz.
        </p>
      </div>
      <button className={style.button} onClick={() => router.push("category")}>
        Start
      </button>
    </div>
  );
}
