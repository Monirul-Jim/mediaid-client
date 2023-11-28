import Image from 'next/image'
import Link from 'next/link'
import { GrMapLocation } from 'react-icons/gr'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";
import axios from 'axios';
import storage from '@/store/storage';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
// import storage from ''
function CheckoutModal() {
    // const dispatch = useDispatch();
    // const cartState = useSelector((state) => state.cart);
    // useEffect(() => {
    //     const storedCartState = storage.getItem('persist:root');
    //     if (storedCartState) {
    //         const parsedCartState = JSON.parse(storedCartState);
    //         dispatch({ type: 'REHYDRATE', payload: { ...parsedCartState, _persist: { version: -1, rehydrated: true } } });
    //     }
    // }, [dispatch]);
    const getItem = localStorage.getItem('persist:root');
    const parseItem = JSON.parse(getItem)
    console.log(parseItem);
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        event.stopPropagation();
        const form = event.target;
        const name = form.person_name.value;
        const mobile = form.mobile_number.value;
        const tran_id = form.tran_id.value;
        const address = form.address.value;
        const currentDate = new Date();
        const formattedDate = `${currentDate.toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
        })} ${currentDate.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
        })}`;
        const savedInfo = { name, mobile, tran_id, address, formattedDate }
        if (window.my_modal_4.open) {
            try {
                const response = await axios.post('https://mediaaid-server.vercel.app/user-order-collection', { savedInfo, parseItem });

                if (response.status === 200) {
                    toast.success('Product added successfully!', {
                        position: toast.POSITION.TOP_RIGHT,
                        autoClose: 3000,
                        onClose: () => {
                            window.my_modal_4.close();
                        },
                    });
                } else {
                    console.error('Unexpected response:', response);
                }
            } catch (error) {
                console.error('Error:', error);
            }

        }
    }

    return (
        <dialog id="my_modal_4" className="modal">

            <form onSubmit={handleFormSubmit} method="dialog" className="modal-box">
                <button onClick={() => window.my_modal_4.close()} className="btn btn-sm btn-circle btn-ghost absolute right-4 top-2">
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


                    <div className="relative">
                        <label
                            htmlFor="productName"
                            className="block text-neutral-600 mb-1">
                            Enter Your Name
                        </label>
                        <input name="person_name" type='text' className="w-full border-gray-300 border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg py-1 px-2" />
                    </div>
                    <div className="relative">
                        <label
                            htmlFor="productName"
                            className="block text-neutral-600 mb-1">
                            Enter Your Mobile Number
                        </label>
                        <input name="mobile_number" type='number' className="w-full border-gray-300 border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg py-1 px-2" />
                    </div>
                    <div className="relative">
                        <label
                            htmlFor="productName"
                            className="block text-neutral-600 mb-1">
                            Enter Bkash/Nagad TransactionID
                        </label>
                        <input name="tran_id" type='text' className="w-full border-gray-300 border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg py-1 px-2" />
                    </div>
                    <div className="relative">
                        <label
                            htmlFor="productName"
                            className="block text-neutral-600 mb-1">
                            Address (please give details address)
                        </label>
                        <input name="address" type='text' className="w-full border-gray-300 border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg py-1 px-2" />
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
                    </div>
                    <button type="submit" className="text-center cursor-pointer bg-[#101B7A] w-full font-bold text-white py-2 mt-3 rounded-sm">
                        Place order
                    </button>
                    <div className="my-4 px-1">
                    </div>

                </div>
            </form>
        </dialog>
    )
}

export default CheckoutModal


// const data = {
//     "cartState": "{\"cartItems\":[{\"_id\":\"6554b6c1df2c70b0a7b24f52\",\"title\":\"Sit deserunt ipsum\",\"price\":812,\"thumbnail\":\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5eli8PIDmrcQtNvboZg_OAA8erV-UltGEuLsJi7Bw3AH14s4Jx0SqmDdp_jSZZCqOpqE&usqp=CAU\",\"stock\":\"10\",\"brand\":\"Deserunt qui esse es\",\"images\":[{\"url\":\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5eli8PIDmrcQtNvboZg_OAA8erV-UltGEuLsJi7Bw3AH14s4Jx0SqmDdp_jSZZCqOpqE&usqp=CAU\"},{\"url\":\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5eli8PIDmrcQtNvboZg_OAA8erV-UltGEuLsJi7Bw3AH14s4Jx0SqmDdp_jSZZCqOpqE&usqp=CAU\"},{\"url\":\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5eli8PIDmrcQtNvboZg_OAA8erV-UltGEuLsJi7Bw3AH14s4Jx0SqmDdp_jSZZCqOpqE&usqp=CAU\"}],\"startDate\":\"2023-11-15\",\"endDate\":\"2023-11-17\",\"category\":\"Healthy_Food\",\"highlight\":[{\"high\":\"Eos sint labore vel \"},{\"high\":\"Eos sint labore vel \"}],\"subcategory\":\"Festival or fair\",\"typeOfSelling\":\"flash_sale\",\"description\":\"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum\",\"rating\":\"4.2\",\"status\":\"active\",\"tag\":[{\"tag\":\"Ut fuga Quis dolore\"},{\"tag\":\"Ut fuga Quis dolore\"}],\"discountPercent\":70,\"discountVip\":10,\"quantity\":1,\"totalPrice\":244}]}"
// };
// const parsedData = JSON.parse(data.cartState);
// const cartItems = parsedData.cartItems;
// console.log(cartItems);