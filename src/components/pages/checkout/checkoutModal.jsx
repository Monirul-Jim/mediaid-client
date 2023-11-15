import Image from 'next/image'
import Link from 'next/link'
import { GrMapLocation } from 'react-icons/gr'
import PaymentMethod from './PaymentMethod'
function CheckoutModal() {
    return (
        <dialog id="my_modal_4" className="modal">
            <form method="dialog" className="modal-box">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-4 top-2">
                    ✕
                </button>
                <div className="w-full">
                    <h3 className="text-lg">Checkout</h3>
                    <div className="flex items-center my-4 border rounded-md gap-2 ">
                        <div className="flex flex-col items-center bg-yellow-300 px-1 py-2">
                            <GrMapLocation className="text-2xl" />
                            <p className="text-sm rounded-md mt-[2px] text-center">Home</p>
                        </div>
                        <div className="text-xs">
                            <p className="text-sm font-bold text-neutral-800 tracking-wide">
                                Bulbul Ahmed
                            </p>
                            <p className="text-gray-700">+8801789499829</p>
                            <p className="text-gray-700">
                                8 road, karpara,balakair,gopalganj
                            </p>
                        </div>
                    </div>
                </div>
                <div className="border rounded-md">
                    <div className="flex items-center justify-between bg-teal-400 bg-opacity-40 px-2 py-1">
                        <div className="flex items-center gap-1">
                            <Image
                                src="https://i.ibb.co/85JhnZz/money.webp"
                                alt=""
                                width={20}
                                height={20}
                            />
                            <p>To be paid</p>
                        </div>
                        <p>৳ 360</p>
                    </div>
                    <div className="my-4 px-1">
                        <PaymentMethod
                            title="Credit/Debit card & Mobile banking Payment"
                            paymentIconLink="https://i.ibb.co/jkFXfsb/sslcz-verified.png"
                            isOpen={"SSLCommerz"}>
                            <p>
                                Pay securely by Credit/Debit card, Internet banking or Mobile
                                banking through SSLCommerz and get 10% discount on selective
                                bank cards.
                            </p>
                        </PaymentMethod>
                        <PaymentMethod
                            title="Cash on delivery"
                            paymentIconLink="https://i.ibb.co/pKrnkm6/cash-on-delivery-1.png"
                            isOpen={"cashOnDelivery"}>
                            <p>
                                Pay with cash upon delivery. Need to pay 200 Taka in advance
                                for Cash on Delivery outside Dhaka.
                            </p>
                        </PaymentMethod>
                        {/* {paymentFieldData.map((item) => (
                            <div key={item.id}>
                                <PaymentMethod
                                    title={item.name}
                                    paymentIconLink={item.logoUrl}>
                                    <div>
                                        <p className="text-sm text-gray-600">
                                            {item.paymentDescription}
                                        </p>
                                        <p className="mt-1 text-gray-900">
                                            {item.paymentNumberTypeAndNumber}
                                        </p>
                                    </div>
                                    <div className="flex justify-center mt-2">
                                        <table className="w-full bg-teal-400 bg-opacity-40 shadow-md rounded-lg overflow-hidden">
                                            <tbody>
                                                <tr>
                                                    <td className="py-2 px-2 border-b border-gray-200 text-base text-neutral-800 font-semibold">
                                                        {item.name} Number
                                                    </td>
                                                    <td className="py-2 px-2 border-b border-gray-200">
                                                        <input
                                                            type="number"
                                                            className="w-full py-1 px-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-2 border-b border-gray-200 text-base text-neutral-800 font-semibold">
                                                        {item.name} Transaction ID
                                                    </td>
                                                    <td className="py-2 px-2">
                                                        <input
                                                            type="text"
                                                            className="w-full py-1 px-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                                        />
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </PaymentMethod>
                            </div>
                        ))} */}
                    </div>
                    <div className="w-[420px] p-2">
                        <p className="text-sm text-gray-600">
                            Your personal data will be used to process your order, support
                            your experience throughout this website, and for other purposes
                            described in our{" "}
                            <Link className="text-blue-800" href="">
                                privacy policy
                            </Link>
                            .
                        </p>
                        <div className="flex items-center mt-4 gap-2">
                            <input
                                type="checkbox"
                                className="checkbox checkbox-sm cursor-pointer "
                            />
                            <p className="text-sm">
                                I have read and agree to the website{" "}
                                <Link className="text-blue-800 underline" href="">
                                    terms and conditions
                                </Link>
                                *
                            </p>
                        </div>
                        <p className="text-center cursor-pointer bg-[#101B7A] w-full font-bold text-white py-2 mt-3 rounded-sm">
                            Place order
                        </p>
                    </div>
                </div>
            </form>
        </dialog>
    )
}

export default CheckoutModal