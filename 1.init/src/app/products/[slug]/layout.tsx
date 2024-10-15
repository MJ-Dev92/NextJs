import Link from "next/link";

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <section>{children}</section>
    </>
  );
}
