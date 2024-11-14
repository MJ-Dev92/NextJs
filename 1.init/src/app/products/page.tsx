import Link from "next/link";
import Image from "next/image";

import TextArticle from "../../components/TextArticle";
import { getProducts } from "@/service/products";

import clothesImage from "../../../public/images/clothes.jpg";
// export const revalidate = 3;

export default async function ProductsPage() {
  // 서버 파일(데이터베이스)에 있는 제품의 리스트를 읽어와서, 그걸 보여줌
  const products = await getProducts();

  return (
    <>
      <h1>제품 소개 페이지!</h1>
      <Image src={clothesImage} alt="Clothes" priority />
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <Link href={`products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
      <TextArticle />
    </>
  );
}
