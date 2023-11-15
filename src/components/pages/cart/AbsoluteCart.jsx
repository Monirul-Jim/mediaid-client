
'use client'
import { ToggleContext } from "@/provider/contextProvider";
import { discountCalculator } from "@/utils/generator";
import { useContext } from "react";
import { BsCartPlus } from "react-icons/bs";
import { useSelector } from "react-redux";

const AbsoluteCart = () => {
  const { setData } = useContext(ToggleContext)
  const { cartItems } = useSelector(state => state.cartState)

  var prices = cartItems.reduce((sum, i) => {
    return sum + (discountCalculator(
      i.price,
      i.discountPercent
    ) * i.quantity)
  }, 0)

  return (
    <div
      onClick={() => setData(s => ({ ...s, openCart: true }))}
      className="w-fit hidden md:block shadow-2xl shadow-teal-600 cursor-pointer hover:scale-95 duration-300 relative border-2 border-white">
      <div className="bg-teal-600 p-1 flex justify-center items-center flex-col">
        <BsCartPlus size={32} color="white" />
        <p className="text-white">
          <span>{cartItems.length}</span> Items
        </p>
      </div>
      <p className="bg-white p-1 text-center">
        ৳ <span>{prices}</span>
      </p>
    </div>
  );
};

export default AbsoluteCart;
