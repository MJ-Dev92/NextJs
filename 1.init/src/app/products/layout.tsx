import Link from "next/link";
import styles from "./layout.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "무언가 제품 사이트 | 전체 제품 확인",
  description: "무언가 제품을 확인해 보세요.",
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className={styles.nav}>
        <Link href="/products/man">남성옷</Link>
        <Link href="/products/women">여성옷</Link>
      </nav>
      <section className={styles.product}>{children}</section>
    </>
  );
}
