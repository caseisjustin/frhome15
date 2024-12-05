import axios from "axios"
import { useEffect, useState } from "react"
import Skelet from "./Skelet"
import ProductPrev from "./ProductPrev"

export default function Example() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    try {
      axios
        .get("https://fakestoreapi.com/products")
        .then((res) => {
          setProducts([...res.data])
        })
        .catch((err) => {
          console.error(err)
        })
        .finally(setLoading(false))
    } catch (err) {
      console.error(err)
    }
  }, [])

  const productInfos = products?.map((product) => (
    <ProductPrev product={product} key={product.id}/>
  ))

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>
        {
          loading && <Skelet />
        }
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {productInfos}
        </div>
      </div>
    </div>
  )
}
