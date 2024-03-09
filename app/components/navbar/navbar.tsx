import Image from "next/image";


export default function Navbar() {
  return (
    <div style={{display: "flex", alignItems: "center", justifyContent: "left", padding:"5px"}}>
      <p>
      <Image src="/logo 1.png" height="50" width="50" alt="logo" />
      </p>
      Buz <span style={{color:"rgb(123,186,29"}}>World</span>
    </div>
  );
}
