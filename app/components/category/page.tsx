"use client";
import style from "./category.module.scss"
export default function Section() {
  return (
    <div className={style.home}>
      <p>
        Each of the categories belows have differnt questions concerning each
        section you click.
        <br />
        Click on the section you want and start your quiz. <br />
        <span style={{fontWeight: "bolder"}}>Success</span>
      </p>
      <div className={style.click}>
        <button>Art</button>
        <br/>
        <button>SCIENCE</button>
        <br/>
        <button>SOCIAL-SCIENCE</button>
      </div>
    </div>
  );
}
