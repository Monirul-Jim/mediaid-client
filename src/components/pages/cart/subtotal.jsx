import { discountCalculator } from "@/utils/generator";
import Image from "next/image";
import { memo, useState } from 'react';
import { BiDotsVerticalRounded } from "react-icons/bi";
import { useSelector } from "react-redux";

function Subtotal() {
    const [activeCoupon, setActiveCoupon] = useState(false)
    const { cartItems } = useSelector(s => s.cartState)

    // Total bills calculator
    var prices = cartItems.reduce((sum, i) => {
        return sum + (discountCalculator(
            i.price,
            i.discountPercent
        ) * i.quantity)
    }, 0)
    return (
        <div className="border p-2 rounded-md mb-4">
            <button
                onClick={() => setActiveCoupon(s => !s)}
                className="underline text-sm cursor-pointer text-gray-700 hover:text-teal-600 duration-100 w-fit">
                Have a coupon code?
            </button>
            {
                activeCoupon ?
                    <form className="flex ">
                        <div className="flex items-center outline-dotted mt-2 bg-teal-300 outline-teal-300 rounded-md pl-1">
                            <BiDotsVerticalRounded className="" size={25} color="teal" />
                            <input
                                placeholder="Enter Coupon Code"
                                className="outline-none bg-teal-300 focus:placeholder-teal-600 placeholder:text-sm ml-1 mr-2"
                                type="text"
                            />
                            <button className="bg-teal-600 p-2 text-neutral-100 rounded-r-md text-sm tracking-wider hover:bg-teal-500">
                                Apply
                            </button>
                        </div>
                    </form> : null
            }
            <div className="flex items-center mt-4 border-2 border-dotted p-2 border-teal-500 rounded-md bg-teal-500 bg-opacity-5">
                <Image
                    src="https://i.ibb.co/MCc6r7k/taka.webp"
                    alt=""
                    width={20}
                    height={20}
                />
                <p className="text-sm ml-1 text-teal-600">
                    You are saving
                    <span className="font-bold text-teal-600"> ৳ 44</span> in this
                    order.
                </p>
            </div>
            <div className="mt-4 flex flex-col gap-y-1">
                <div className="flex text-neutral-700 items-center justify-between text-sm">
                    <p>Subtotal</p>
                    <p className=" text-teal-600 tracking-wide">৳ {prices}</p>
                </div>
                <div className="flex text-neutral-700 items-center justify-between text-sm">
                    <p>Discount applied</p>
                    <p className=" text-teal-600 tracking-wide">-৳ 00</p>
                </div>
                <div className="flex text-neutral-700 items-center justify-between text-sm">
                    <p>Delivery charge</p>
                    <p className=" text-teal-600 tracking-wide">৳ 68</p>
                </div>
                <hr className="mt-1" />
                <div className="flex text-neutral-700 items-center justify-between">
                    <p className="font-bold text-sm text-teal-600">Amount Payable</p>
                    <p className=" text-teal-600 tracking-wide font-bold">৳ {prices + 68}</p>
                </div>
            </div>
        </div>
    )
}

export default memo(Subtotal)