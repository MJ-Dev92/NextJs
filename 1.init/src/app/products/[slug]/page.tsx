import React from "react";

type Props = {
  params: {
    slug: string;
  };
};

export default function PantsPage({ params }: Props) {
  return <h1>{params.slug}바지 제품 설명 페이지</h1>;
}

export function generateStaticParams() {
  const products = ["pants", "top", "outer"];

  return products.map((product) => ({
    slug: product,
  }));
}
