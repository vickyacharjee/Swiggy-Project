const LoadingCartGrocery=({items})=>{
    console.log(items);
    
    return(
        <div>
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white rounded-lg shadow-lg max-w-sm w-full p-6">
                        <div className="flex justify-center mb-4">
                        <div className="bg-green-100 rounded-full p-2">
                            <svg
                            className="w-6 h-6 text-green-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                            />
                            </svg>
                        </div>
                        </div>
                        <h2 className="text-xl font-semibold text-center mb-2">
                          <b>{items.name}</b> 
                        </h2>
                    
                        <button
                        
                        className="w-full bg-orange-600 text-white py-2 rounded-md hover:bg-orange-700 transition"
                        >
                        item successfully added to ur cart
                        </button>
                    </div>
                    </div>
        </div>
    )
}
export default LoadingCartGrocery;





