'use client'
import { addToCart } from "@/slices/cartSlice"
import Link from "next/link"
import { BsCart } from "react-icons/bs"
import { FiEye, FiHeart } from "react-icons/fi"
import { useDispatch, useSelector } from "react-redux"

function BestSellingButton({ item }) {

    const dispatch = useDispatch()
    const { cartItems } = useSelector(state => state.cartState)
    const existInCart = cartItems.find(x => x._id === item._id)

    return (
        <div className="flex items-center justify-center gap-3 my-2">
            <Link
                href={{ pathname: "/view", query: { product: item.sku } }}
                className="bg-yellow-500 p-1 rounded-full hover:bg-slate-700 duration-300">
                <FiEye className="text-lg text-white" />
            </Link>
            <button
                className="bg-yellow-500 p-1 rounded-full hover:bg-slate-700 duration-300">
                <FiHeart className="text-lg text-white" />
            </button>
            <button
                onClick={() => dispatch(addToCart(item))}
                className={`${existInCart ? "bg-slate-700" : "bg-yellow-500"} p-1 rounded-full hover:bg-slate-700 duration-300`}>
                <BsCart className="text-lg text-white" />
            </button>
        </div>
    )
}

export default BestSellingButton