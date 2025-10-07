const CardProduct = ({ product }: { product: { id: number; title: string; description: string; price: number; image: string; rating: { rate: number; count: number; } } }) => {
    return (
        <div className="w-full max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 flex flex-col h-full hover:scale-105 transition-transform duration-300 ease-in-out">
            <div className="flex justify-center items-center h-48 ">
                <a href="#">
                    <img className="p-8 rounded-t-lg h-48 w-auto" src={product.image} alt={product.title} />
                </a>
            </div>
            <div className="px-5 pb-5 flex flex-col flex-grow">
                <div className="flex-grow">
                    <a href="#">
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white text-center">{product.title}</h5>
                    </a>
                    <div className="flex mt-2.5 mb-5 justify-center items-center text-center">
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">{product.rating.rate}</span>
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">{product.rating.count} avaliações</span>
                    </div>
                </div>
                <div className="mt-auto">
                    <div className="flex items-center justify-center text-center mb-4">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">R$ {product.price}</span>
                    </div>
                    <div className="text-center">
                        <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Adicionar ao Carrinho</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardProduct