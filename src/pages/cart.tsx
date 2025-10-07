import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface CartProduct {
    productId: number
    quantity: number
}

interface Cart {
    id: number
    userId: number
    date: string
    products: CartProduct[]
}

interface Product {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
}

const Cart = () => {
    const navigate = useNavigate()
    const [carts, setCarts] = useState<Cart[]>([])
    const [products, setProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [showDeleteAlert, setShowDeleteAlert] = useState(false)

    useEffect(() => {
        const fetchCartsAndProducts = async () => {
            try {
                const cartsResponse = await fetch('https://fakestoreapi.com/carts/user/1')
                const cartsData = await cartsResponse.json()

                if (cartsData.length > 0) {
                    const userCart = cartsData[0] 
                    setCarts([userCart])

                    
                    const productPromises = userCart.products.map((item: CartProduct) =>
                        fetch(`https://fakestoreapi.com/products/${item.productId}`)
                            .then(res => res.json())
                    )

                    const productsData = await Promise.all(productPromises)
                    setProducts(productsData)
                }
            } catch (err) {
                setError('Erro ao carregar carrinho')
                console.error('Erro:', err)
            } finally {
                setLoading(false)
            }
        }

        fetchCartsAndProducts()
    }, [])

    // const removeFromCart = async (productId: number) => {
    //     const updatedProducts = products.filter(product => product.id !== productId)
    //     setProducts(updatedProducts)
    // }

    const clearCart = async () => {
        if (!carts[0]) return

        try {
            const response = await fetch(`https://fakestoreapi.com/carts/${carts[0].id}`, {
                method: 'DELETE'
            })

            if (response.ok) {
                const result = await response.json()
                console.log('Carrinho deletado:', result)
                
                setCarts([])
                setProducts([])
                
                setShowDeleteAlert(true)
                
                setTimeout(() => {
                    setShowDeleteAlert(false)
                }, 3000)
                
            } else {
                throw new Error('Erro ao limpar carrinho')
            }
        } catch (error) {
            console.error('Erro:', error)
            alert('Erro ao limpar carrinho')
        }
    }

    const calculateTotal = () => {
        if (!carts[0]) return 0
        
        return carts[0].products.reduce((total, cartItem) => {
            const product = products.find(p => p.id === cartItem.productId)
            return total + (product ? product.price * cartItem.quantity : 0)
        }, 0)
    }

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="text-xl">Carregando carrinho...</div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="flex flex-col justify-center items-center min-h-screen">
                <div className="text-xl text-red-500 mb-4">{error}</div>
                <button 
                    onClick={() => navigate('/')} 
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Voltar para Home
                </button>
            </div>
        )
    }

    if (!carts[0] || products.length === 0) {
        return (
            <div className="container mx-auto px-4 py-8 relative">
                {/* Notificação de Carrinho Limpo */}
                {showDeleteAlert && (
                    <div className="absolute top-4 left-4 right-4 z-10 p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 animate-pulse" role="alert">
                        <span className="font-medium">Carrinho limpo com sucesso!</span>
                    </div>
                )}
                
                <div className="flex flex-col items-center justify-center min-h-96">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">Seu Carrinho</h1>
                    <div className="text-xl text-gray-600 mb-6">Seu carrinho está vazio</div>
                    <button 
                        onClick={() => navigate('/')} 
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Continuar Comprando
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="container mx-auto px-4 py-8 relative">
            {/* Notificação de Carrinho Limpo */}
            {showDeleteAlert && (
                <div className="absolute top-4 left-4 right-4 z-10 p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 animate-pulse" role="alert">
                    <span className="font-medium">Carrinho limpo com sucesso!</span>
                </div>
            )}

            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Seu Carrinho</h1>
                <div className="flex space-x-4">
                    <button 
                        onClick={clearCart}
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
                    >
                        Limpar Carrinho
                    </button>
                    <button 
                        onClick={() => navigate('/')} 
                        className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                    >
                        ← Continuar Comprando
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Lista de Produtos */}
                <div className="lg:col-span-2">
                    <div className="bg-white rounded-lg shadow-md">
                        {carts[0].products.map((cartItem) => {
                            const product = products.find(p => p.id === cartItem.productId)
                            if (!product) return null

                            return (
                                <div key={product.id} className="flex items-center p-6 border-b border-gray-200 last:border-b-0">
                                    <img 
                                        src={product.image} 
                                        alt={product.title}
                                        className="w-20 h-20 object-contain rounded cursor-pointer"
                                        onClick={() => navigate(`/product/${product.id}`)}
                                    />
                                    <div className="flex-grow ml-4">
                                        <h3 
                                            className="text-lg font-semibold text-gray-900 cursor-pointer hover:text-blue-600"
                                            onClick={() => navigate(`/product/${product.id}`)}
                                        >
                                            {product.title}
                                        </h3>
                                        <p className="text-sm text-gray-500 capitalize">{product.category}</p>
                                        <div className="flex items-center mt-2">
                                            <span className="text-lg font-bold text-blue-600">R$ {product.price}</span>
                                            <span className="ml-4 text-gray-600">Qtd: {cartItem.quantity}</span>
                                        </div>
                                    </div>
                                    {/* <button 
                                        onClick={() => removeFromCart(product.id)}
                                        className="text-red-500 hover:text-red-700 p-2"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </button> */}
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* Resumo do Pedido */}
                <div className="lg:col-span-1">
                    <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
                        <h2 className="text-xl font-bold text-gray-900 mb-4">Resumo do Pedido</h2>
                        
                        <div className="space-y-2 mb-4">
                            <div className="flex justify-between text-gray-600">
                                <span>Subtotal ({carts[0].products.length} itens)</span>
                                <span>R$ {calculateTotal().toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-gray-600">
                                <span>Frete</span>
                                <span className="text-green-600">Grátis</span>
                            </div>
                            <hr className="border-gray-200" />
                            <div className="flex justify-between text-lg font-bold text-gray-900">
                                <span>Total</span>
                                <span>R$ {calculateTotal().toFixed(2)}</span>
                            </div>
                        </div>

                        <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 transition-colors">
                            Finalizar Compra
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart