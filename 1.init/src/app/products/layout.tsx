import Link from "next/link";
import styles from "./layout.module.css";

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
      <ul>
        <Link href="/products/top">
          <li>Top</li>
        </Link>
        <li>
          <Link href="/products/pants">Pants</Link>
        </li>
        <li>
          <Link href="/products/outer">Outer</Link>
        </li>
        <li>
          <Link href="/products/shose">Shose</Link>
        </li>
      </ul>
    </>
  );
}
