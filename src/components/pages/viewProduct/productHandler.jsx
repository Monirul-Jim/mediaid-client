'use client'
import { BiMinus, BiPlus } from "react-icons/bi"

function ProductHandler() {

    function addToCart() {

    }
    function OrderNow() {

    }
    return (
        <>
            <div className="flex items-center gap-1 w-2/5">
                <p className="bg-red-400 btn btn-sm ">
                    <BiMinus size={20} color="black" />
                </p>
                <input
                    type="number"
                    className="w-12 text-center font-bold text-green-500 outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    // value="232"
                    min="1"
                />
                <p className="bg-green-400 btn btn-sm">
                    <BiPlus size={20} color="black" />
                </p>
            </div>
            <div className="flex items-center gap-5 md:gap-3 mt-3 md:mt-auto w-3/5">
                <button
                    onClick={addToCart}
                    className="px-4 py-2 bg-slate-100 shadow text-gray-700 hover:bg-indigo-600 duration-300 rounded text-xs sm:text-sm font-semibold hover:text-white w-full">
                    Add to Cart
                </button>
                <button
                    onClick={OrderNow}
                    className="px-4 py-2 hover:bg-slate-100 shadow hover:text-gray-700 bg-indigo-600 duration-300 rounded text-xs sm:text-sm font-semibold text-white w-full">
                    Order Now
                </button>
            </div>
        </>
    )
}

export default ProductHandler