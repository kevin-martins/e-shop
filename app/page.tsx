import { ProductProps } from "@/models/product";
import { getProducts } from "@/services/product";

export default async function Home() {
  // const [products, setProducts] = useState([])
  const products = await getProducts();
  console.log("product", products)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container bg-blue-500">
        <h1>E-Shop</h1>
        {products.map((product: ProductProps) => (
          <div key={product.id}>
            <p>{product.name}</p>
          </div>
        ))}
      </div>
    </main>
  )
}

// export async function getStaticProps() {
//   const products = (await getPosts()) || [];
//   console.log("static")
//   getProducts().then(res => console.log(res))
//   return  {
//     props: { products }
//   }
// }