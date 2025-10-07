import { useState, useEffect } from "react"
import CardProduct from "../components/CardProduct";

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

const Home = () => {
  const [data, setData] = useState<Product[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products")
      const result = await response.json()
      setData(result)
    }

    fetchData()
  }, [])

  return (
    <div className="min-h-screen p-4 max-w-7xl mx-auto sm:px-6 lg:px-8">

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {data.map((product) => (
        <CardProduct key={product.id} product={product} />
      ))}

      </div>

    </div>
  )
}

export default Home