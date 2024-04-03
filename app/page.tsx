import Link from "next/link";
import ProductCard from "./components/ProductCard/ProductCard";

export default function Page() {
  return (
    <main>
      <h1>Hello World!</h1>
      <Link href="/users">Users</Link>
      <ProductCard />
    </main>
  )
}