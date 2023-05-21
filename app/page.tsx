import { ProductProps } from "@/models/product";
import { getProducts } from "@/services/product";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";

export default async function Home() {
  const products = await getProducts();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container">
        <div className="bg-green-500 w-44 h-12 -skew-x-[30deg] mb-5">
          <h1 className="text-2xl text-center skew-x-[30deg] text-white">Products</h1>
        </div>
        <div className="flex gap-5 flex-wrap">
          {products.map((product: ProductProps) => (
            <Link
              href={`/product/${product.id}`}
            >
              <ProductCard key={product.id} {...product} />
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
