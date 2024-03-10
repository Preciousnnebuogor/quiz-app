"use client";
import Link from "next/link";
import style from "./category.module.scss";
import { useRouter } from "next/navigation";

export default function Section() {
  const router = useRouter();
  return (
    <div className={style.home}>
      <p>
        Each of the categories belows have differnt questions concerning each
        section you click.
        <br />
        Click on the section you want and start your quiz. <br />
        <span style={{ fontWeight: "bolder" }}>Success</span>
      </p>
      <div className={style.click}>
        <Link href={{ pathname: "/aquestion", query: { category: "Art" } }}>
          Art
        </Link>

        <Link href={{ pathname: "/aquestion", query: { category: "Science" } }}>
          SCIENCE
        </Link>

        <Link href={{ pathname: "/aquestion", query: { category: "Social" } }}>
          SOCIAL-SCIENCE
        </Link>
      </div>
    </div>
  );
}
