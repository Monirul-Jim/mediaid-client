'use client'

import { ToggleContext } from "@/provider/contextProvider"
import { useContext } from "react"
import { BsCartPlus } from "react-icons/bs"
import { useSelector } from "react-redux"

function CartButton() {
    const { setData } = useContext(ToggleContext)
    const { cartItems } = useSelector(state => state.cartState)
    return (
        <div
            onClick={() => setData(s => ({ ...s, openCart: !s.openCart }))}
            className="flex items-end cursor-pointer hover:outline rounded-sm outline-teal-400 p-2">
            <div className="relative">
                <BsCartPlus size={32} color="teal" />
                <span className="absolute top-0 right-0 -mt-2 -mr-2 bg-red-600 px-1 text-white font-bold rounded-full text-sm ">
                    {cartItems.length}
                </span>
            </div>
            <p className="font-bold text-base text-teal-500 -mb-1">Cart</p>
        </div>
    )
}

export default CartButton