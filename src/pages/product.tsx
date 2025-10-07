import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

interface Product {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating?: {
        rate: number
        count: number
    }
}

const Product = () => {
    const { id } = useParams<{ id: string }>()
    const navigate = useNavigate()
    const [product, setProduct] = useState<Product | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [showSuccessAlert, setShowSuccessAlert] = useState(false)

    const handleAddToCart = async () => {
        if (!product) return
        
        try {
            const cartData = {
                userId: 1,
                products: [
                    {
                        id: product.id,
                        title: product.title,
                        price: product.price,
                        description: product.description,
                        category: product.category,
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
                
                // Mostrar notificação de sucesso
                setShowSuccessAlert(true)
                
                // Esconder a notificação após 3 segundos
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

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${id}`)
                if (!response.ok) {
                    throw new Error('Produto não encontrado')
                }
                const data = await response.json()
                setProduct(data)
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Erro ao carregar produto')
            } finally {
                setLoading(false)
            }
        }

        if (id) {
            fetchProduct()
        }
    }, [id])

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="text-xl">Carregando...</div>
            </div>
        )
    }

    if (error || !product) {
        return (
            <div className="flex flex-col justify-center items-center min-h-screen">
                <div className="text-xl text-red-500 mb-4">{error || 'Produto não encontrado'}</div>
                <button 
                    onClick={() => navigate('/')} 
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Voltar para Home
                </button>
            </div>
        )
    }

    return (
        <div className="container mx-auto px-4 py-8 bg-gray-700 mt-6 rounded-lg shadow-md mx-auto sm:px-6 lg:px-8 relative">
            
            {/* Notificação de Sucesso */}
            {showSuccessAlert && (
                <div className="absolute top-4 left-4 right-4 z-10 p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 animate-pulse" role="alert">
                    <span className="font-medium">Produto adicionado ao carrinho com sucesso!</span>
                </div>
            )}

            <button 
                onClick={() => navigate('/')} 
                className="mb-6 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
                ← Voltar
            </button>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex justify-center">
                    <img 
                        src={product.image} 
                        alt={product.title}
                        className="max-w-full h-auto max-h-96 object-contain"
                    />
                </div>
                
                <div className="space-y-4">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                        {product.title}
                    </h1>
                    
                    <div className="text-2xl font-bold text-blue-600">
                        R$ {product.price}
                    </div>
                    
                    <div className="text-sm text-gray-500 capitalize">
                        Categoria: {product.category}
                    </div>
                    
                    {product.rating && (
                        <div className="flex items-center space-x-2">
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                                ⭐ {product.rating.rate}
                            </span>
                            <span className="text-gray-500 text-sm">
                                ({product.rating.count} avaliações)
                            </span>
                        </div>
                    )}
                    
                    <div className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {product.description}
                    </div>
                    
                    <button 
                        onClick={handleAddToCart}
                        className="w-full bg-blue-700 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 transition-colors"
                    >
                        Adicionar ao Carrinho
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Product