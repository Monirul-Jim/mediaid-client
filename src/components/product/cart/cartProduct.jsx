import { inputQuantityHandler, removeFromCart } from "@/slices/cartSlice"
import { discountCalculator } from "@/utils/generator"
import Image from "next/image"
import { useDispatch, useSelector } from "react-redux"

function CartProduct({ item }) {
    const discountPrice = discountCalculator(item.price, item.discountPercent)
    const dispatch = useDispatch()
    const { cartItems } = useSelector(s => s.cartState)
    const findItem = cartItems.find(x => x._id === item._id)

    // Input Quantity handler
    function quantityHandler(quantity) {
        dispatch(inputQuantityHandler({ quantity, product: item }))
    }

    return (
        <div
            className="flex justify-start gap-2 w-full p-2 mt-2 shadow-sm rounded-md border">
            <Image
                className="object-cover rounded-full w-[55px] h-[55px]"
                src={item.thumbnail}
                alt={item.title.slice(0, 15)}
                width={100}
                height={100}
            />
            <div className="w-full">
                <div className="flex items-center justify-between">
                    <h3 className="text-[12px]">
                        {item.title}
                    </h3>
                    <button
                        onClick={() => dispatch(removeFromCart(item))}
                        className="outline-none cursor-pointer hover:text-teal-600 mr-1">✖</button>
                </div>
                <div className="flex justify-between mt-1">
                    <div>
                        <p className="text-xs text-gray-600">Maccons Limited</p>
                        <p className="text-xs mt-1 text-gray-700">
                            <span className="text-teal-500 font-bold">{findItem.quantity} x </span>
                            <span className="text-teal-500 font-bold">{discountPrice} = </span>
                            <span className="text-teal-500 font-bold">৳{findItem.quantity * discountPrice}</span>
                        </p>
                    </div>
                    <div>
                        <p className="text-sm">
                            {
                                // Regular Price                                
                                discountPrice !== item.price ?
                                    <del className="text-xs text-gray-400">৳{item.price}</del> : null
                            }
                            <span className="ml-4 text-teal-600">৳{discountPrice}</span>
                        </p>
                        <select value={findItem.quantity} onChange={({ target }) => quantityHandler(target.value)} className="px-2 border w-full py-[2px] rounded-md cursor-pointer hover:border-teal-500 duration-300">
                            {
                                [...Array(10).keys()].map((x, i) => (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                ))
                            }
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartProduct