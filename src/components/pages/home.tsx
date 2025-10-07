import { useState, useEffect } from "react"

const Home = () => {
  const [data, setData] = useState<any[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products")
      const result = await response.json()
      setData(result)
        console.log(result)
    }

    fetchData()
  }, [])



  return (
    <div>
      <h1>Home</h1>
      {data.length > 0 && (
        <div>
          {data.map((product) => (
            <div key={product.id}>
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
              <img src={product.image} alt={product.title} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Home