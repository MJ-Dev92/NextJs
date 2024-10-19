import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import os from "os";
import Counter from "@/components/Counter";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  console.log("안녕");
  console.log(os.hostname());

  return (
    <>
      <h1>홈페이지 입니다!!</h1>
      <Counter />
    </>
  );
}
