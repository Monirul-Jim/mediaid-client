
'use client'
import CartProduct from "@/components/product/cart/cartProduct";
import { ToggleContext } from "@/provider/contextProvider";
import { discountCalculator } from "@/utils/generator";
import { useContext } from "react";
import { IoMdClose } from 'react-icons/io';
import { useSelector } from "react-redux";
import CheckoutModal from "../checkout/checkoutModal";
import Subtotal from "./subtotal";


const AbsoluteCartDetails = () => {
  const { data, setData } = useContext(ToggleContext)
  const { cartItems } = useSelector(s => s.cartState)

  // Total bills calculator
  var prices = cartItems.reduce((sum, i) => {
    return sum + (discountCalculator(
      i.price,
      i.discountPercent
    ) * i.quantity)
  }, 0)

  if (data.openCart) {
    return (
      <div className="animate-popup origin-right h-[80vh] transition-all bg-white w-[360px] shadow-2xl duration-500 rounded-sm overflow-y-scroll">
        <div className="flex items-center justify-between p-1 bg-teal-700 text-white rounded-t-sm">
          <p className="text-xs">
            Free delivery above $999 order (outside Dhaka){" "}
          </p>
          <button
            className="rounded border p-1 border-gray-200 shadow-md"
            onClick={() => setData(s => ({ ...s, openCart: false }))}>
            <IoMdClose />
          </button>
        </div>
        <p className="text-xs text-gray-700 px-1 mt-2">
          Items not Requiring Prescription (3)
        </p>
        <div className="px-1 pb-20">
          {/* ************** cart list ************** */}
          <div>
            {
              !cartItems.length ?
                <div className="flex justify-center my-5">
                  <span className="text-gray-700 px-1 mt-2">Cart is Empty</span>
                </div>
                : cartItems.map((item, i) => (
                  <CartProduct item={item} key={i} />
                ))}
          </div>
          {/* ************** address list ************** */}


          {/* <ChangeAddress></ChangeAddress> */}


          <Subtotal />
        </div>
        <div className="absolute bottom-0 w-full bg-white py-3 border-t-2 border-t-teal-600">
          <div className="flex items-center justify-center">
            <p className="px-2 py-2 bg-teal-600 text-white rounded-s-md">৳ {prices}</p>
            <p
              onClick={() => window.my_modal_4.showModal()}
              className="uppercase ml-[1px] bg-teal-600 px-2 py-2 text-white rounded-e-md cursor-pointer">
              proceed to checkout
            </p>
          </div>
        </div>
        <CheckoutModal />
      </div>
    );
  }
};

export default AbsoluteCartDetails;
