import Image from "next/image";
import style from "./nav.module.scss"

export default function Navbar() {
  return (
    <div className={style.logo}>
      <p>
      <Image src="/logo 1.png" height="50" width="50" alt="logo" />
      </p>
      Buz <span>World</span>
    </div>
  );
}
