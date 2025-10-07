import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const CardProduct = ({ product }: { product: { id: number; title: string; description: string; price: number; image: string; rating: { rate: number; count: number; } } }) => {

    const navigate = useNavigate()
    const [showSuccessAlert, setShowSuccessAlert] = useState(false)

    const handleProductClick = () => {
        navigate(`/product/${product.id}`)
    }

    const handleAddToCart = async () => {
        try {
            const cartData = {
                userId: 1,
                products: [
                    {
                        id: product.id,
                        title: product.title,
                        price: product.price,
                        description: product.description,
                        category: "electronics", 
                        image: product.image
                    }
                ]
            }

            const response = await fetch('https://fakestoreapi.com/carts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(cartData)
            })

            if (response.ok) {
                const result = await response.json()
                console.log('Produto adicionado ao carrinho:', result)
                
                setShowSuccessAlert(true)
                
                setTimeout(() => {
                    setShowSuccessAlert(false)
                }, 3000)
                
            } else {
                throw new Error('Erro ao adicionar produto ao carrinho')
            }
        } catch (error) {
            console.error('Erro:', error)
            alert('Erro ao adicionar produto ao carrinho')
        }
    }

    return (
        <div className="w-full max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow-sm flex flex-col h-full hover:scale-105 transition-transform duration-300 ease-in-out relative">
            
            {/* Notificação de Sucesso */}
            {showSuccessAlert && (
                <div className="text-center absolute top-2 left-2 right-2 z-10 p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 animate-pulse" role="alert">
                    <span className="font-medium">Produto adicionado ao carrinho com sucesso!</span>
                </div>
            )}
            
            <div className="flex justify-center items-center h-48 ">
                <div onClick={handleProductClick} className="cursor-pointer">
                    <img className="p-8 rounded-t-lg h-48 w-auto" src={product.image} alt={product.title} />
                </div>
            </div>
            <div className="px-5 pb-5 flex flex-col flex-grow">
                <div className="flex-grow">
                    <div onClick={handleProductClick} className="cursor-pointer">
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 text-center hover:text-blue-600 transition-colors">{product.title}</h5>
                    </div>
                    <div className="flex mt-2.5 mb-5 justify-center items-center text-center">
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm ms-3">{product.rating.rate}</span>
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm ms-3">{product.rating.count} avaliações</span>
                    </div>
                </div>
                <div className="mt-auto">
                    <div className="flex items-center justify-center text-center mb-4">
                        <span className="text-3xl font-bold text-gray-900">R$ {product.price}</span>
                    </div>
                    <div className="text-center">
                        <button 
                            onClick={handleAddToCart}
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-colors"
                        >
                            Adicionar ao Carrinho
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardProduct