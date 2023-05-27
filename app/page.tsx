import { ProductProps } from "@/models/product";
import { getProducts } from "@/services/product";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import Image from "next/image";

export default async function Home() {
  // const products = await getProducts();
  const products = [
    {
      id: "",
      name: "",
      favorie: true,
      customers: [
        { like: "", reservations: [] }
      ],
      price: 40000,//en centimes
      reduction: 10,
      image: { url: "https://www.lonelyplanet.fr/sites/lonelyplanet/files/styles/article_main_image/public/media/article/image/fotolia_99200222_subscription_monthly_m_0_0.jpg?itok=4VbN41O6" },
      description: "",
      comments: [],
      location: ""
    }
    houses {
      id
      publishedAt
      updatedAt
      createdAt
      name
      price
      reduction
      description
      images(first: 1) {
        url
      }
      location {
        latitude
        longitude
      }
      reservations {
        date
        favorie
        comment {
          rating
        }
        }
    }
  ]

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container">
        <div className="bg-green-500 w-44 h-12 -skew-x-[30deg] mb-5">
          <h1 className="text-2xl text-center skew-x-[30deg] text-white">Products</h1>
        </div>
        <div className="flex gap-5 flex-wrap">
          {products.map(product => (
            <div
              key={product.name}
              className="relative"
            >
              <img
                src={product.image.url}
                alt={product.name}
                height={450}
                width={550}
                className="rounded-lg"
              />
              <div className=" flex bg-gray-400 w-max px-10 py-2 rounded-lg my-auto h-20">
                <span className="text-2xl font-bold">{product.price / 100}€</span>
                <p className="h-full my-auto">/jours</p>
              </div>
            </div>
          ))}
          {/* {products.map((product: any) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
            >
              <ProductCard key={product.id} {...product} />
            </Link>
          ))} */}
        </div>
      </div>
    </main>
  )
}
