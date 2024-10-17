import Link from "next/link";
import React from "react";

const products = ["shirt", "pants", "outer", "shoes"];

export default function ProductsPage() {
  return (
    <>
      <h1>제품 소개 페이지!</h1>
      {products.map((product, index) => (
        <li key={index}>
          <Link href={`products/${product}`}>{product}</Link>
        </li>
      ))}
    </>
  );
}
