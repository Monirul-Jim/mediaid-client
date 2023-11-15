
'use client'

import { addToCart, decrementQuantity, incrementQuantity } from "@/slices/cartSlice"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import { useDispatch, useSelector } from "react-redux"

function FlashButton({ item }) {
    const dispatch = useDispatch()
    const { cartItems } = useSelector(state => state.cartState)
    const existInCart = cartItems.find(x => x._id === item._id)

    return (
        <>
            {
                existInCart ?
                    <div className="flex justify-between px-1">
                        <div >
                            <span className="text-sm">Quantity: </span>
                        </div>
                        <div className="flex justify-center gap-2 items-center">
                            <button
                                onClick={() => dispatch(decrementQuantity(item))}
                                className="border text-sm px-2 py-1 hover:bg-gray-200 transition">
                                <AiOutlineMinus />
                            </button>
                            <span >{existInCart.quantity}</span>
                            <button
                                onClick={() => dispatch(incrementQuantity(item))}
                                className="border text-sm px-2 py-1 hover:bg-gray-200 transition">
                                <AiOutlinePlus />
                            </button>
                        </div>
                    </div > :
                    <div className="px-1">
                        <button
                            onClick={() => dispatch(addToCart(item))}
                            className="uppercase text-xs border w-full py-1 font-sans hover:bg-yellow-200 transition border-yellow-300 text-neutral-800 ">
                            Add to cart
                        </button>
                    </div>
            }

        </>
    )
}

export default FlashButton