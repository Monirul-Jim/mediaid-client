import Image from 'next/image'
import Link from 'next/link'
import { GrMapLocation } from 'react-icons/gr'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";
import axios from 'axios';
import { ToggleContext } from "@/provider/contextProvider";
import { discountCalculator } from "@/utils/generator";
import { useContext, useEffect, useState } from "react";
import { useSelector } from 'react-redux';
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
    const [paymentMethod, setPaymentMethod] = useState('');
    const [deliveryLocation, setDeliveryLocation] = useState('');
    const { data, setData } = useContext(ToggleContext)
    const { cartItems } = useSelector(s => s.cartState)
    const [totalAmount, setTotalAmount] = useState(0);
    const [extraCost, setExtraCost] = useState(0);
    const getItem = localStorage.getItem('persist:root');
    const parseItem = JSON.parse(getItem)
    const [userSelection, setUserSelection] = useState(null);
    const [inputValue, setInputValue] = useState('');
    const [inputError, setInputError] = useState('');
    // useEffect(() => {
    //     let prices = cartItems.reduce((sum, item) => {
    //         return sum + discountCalculator(item.price, item.discountPercent) * item.quantity;
    //     }, 0);
    //     let additionalCharge = 0;
    //     if (paymentMethod === 'bkash') {
    //         additionalCharge = Math.ceil(prices / 1000) * 19;
    //     } else if (paymentMethod === 'nagad') {
    //         additionalCharge = Math.ceil(prices / 1000) * 14;
    //     }
    //     const total = prices + additionalCharge;
    //     setTotalAmount(total);
    // }, [paymentMethod, cartItems]);

    const handleSelection = (selection) => {
        setUserSelection(selection);

        // If the user selects "No", clear the input field and reset the extra cost
        if (selection === 'No') {
            setInputValue('');
            setExtraCost(0);
        }

        // If the user selects "Yes", add an extra 200 tk to totalAmount
        if (selection === 'Yes') {
            setExtraCost(200);
        }
    };


    const handleInputChange = (e) => {
        const inputValueWithoutSymbols = e.target.value.replace(/[^A-Za-z]/g, '');

        // Check for invalid characters
        if (!/^[A-Za-z]+$/.test(inputValueWithoutSymbols)) {
            setInputError('Invalid characters. Please enter only letters.');
        } else {
            setInputError('');
        }

        setInputValue(inputValueWithoutSymbols);
    };
    // useEffect(() => {
    //     let prices = cartItems.reduce((sum, item) => {
    //         return sum + discountCalculator(item.price, item.discountPercent) * item.quantity;
    //     }, 0);
    //     let additionalCharge = 0;
    //     if (paymentMethod === 'bkash') {
    //         additionalCharge = Math.ceil(prices / 1000) * 19;
    //     } else if (paymentMethod === 'nagad') {
    //         additionalCharge = Math.ceil(prices / 1000) * 14;
    //     }

    //     let deliveryCharge = 0;
    //     if (deliveryLocation === 'inside_dhaka') {
    //         deliveryCharge = 60;
    //     } else if (deliveryLocation === 'outside_dhaka') {
    //         deliveryCharge = 100;
    //     }

    //     const total = prices + additionalCharge + deliveryCharge;
    //     setTotalAmount(total);
    // }, [paymentMethod, deliveryLocation, cartItems]);
    useEffect(() => {
        let prices = cartItems.reduce((sum, item) => {
            return sum + discountCalculator(item.price, item.discountPercent) * item.quantity;
        }, 0);
        let additionalCharge = 0;
        if (paymentMethod === 'bkash') {
            additionalCharge = Math.ceil(prices / 1000) * 19;
        } else if (paymentMethod === 'nagad') {
            additionalCharge = Math.ceil(prices / 1000) * 14;
        }

        let deliveryCharge = 0;
        if (deliveryLocation === 'inside_dhaka') {
            deliveryCharge = 60;
        } else if (deliveryLocation === 'outside_dhaka') {
            deliveryCharge = 100;
        }

        const total = prices + additionalCharge + deliveryCharge + extraCost;
        setTotalAmount(total);
    }, [paymentMethod, deliveryLocation, cartItems, extraCost]);




    const handleFormSubmit = async (event) => {
        event.preventDefault();
        event.stopPropagation();
        const form = event.target;
        const name = form.person_name.value;
        const mobile = form.mobile_number.value;
        const tran_id = form.tran_id?.value;
        // const paymentMethod = form.paymentMethod.value;
        const address = form.address.value;
        // const insideDhaka = form.insideDhaka.value;
        // const outsideDhaka = form.outsideDhaka.value;
        const yesButton = form.yesButton.value;
        const noButton = form.noButton.value;
        const user_name_product = inputValue;
        const amount = form.amount.value;
        const currentDate = new Date();
        const formattedDate = `${currentDate.toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
        })} ${currentDate.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
        })}`;
        const savedInfo = {
            name, tran_id, mobile, address, formattedDate, paymentMethod, deliveryLocation, yesButton, totalAmount, noButton, user_name_product, amount,
        };

        console.log(savedInfo);
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
                        <p>৳ {totalAmount}</p>
                    </div>
                    <div className="flex items-center mt-2 mb-2">
                        <input
                            type="radio"
                            name="insideDhaka"
                            id="insideDhaka"
                            value="inside_dhaka"
                            onChange={() => setDeliveryLocation('inside_dhaka')}
                            className="form-radio text-indigo-600 space-x-2 h-5 w-5"
                        />
                        <label htmlFor="insideDhaka" className="ml-2 text-gray-700">Inside Dhaka (60 TK)</label>
                        <input
                            type="radio"
                            name="outsideDhaka"
                            id="outsideDhaka"
                            value="outside_dhaka"
                            onChange={() => setDeliveryLocation('outside_dhaka')}
                            className="form-radio text-indigo-600 h-5 w-5"
                        />
                        <label htmlFor="outsideDhaka" className="ml-2 text-gray-700">Outside Dhaka (100 Tk)</label>
                    </div>

                    <div className='gap-4'>
                        <h1 className='font-semibold mt-2 mb-2'>Payment Method (Please Select A Method)</h1>
                        <div>
                            <input
                                type="radio"
                                name="cashOnDelivery"
                                id="cashOnDelivery"
                                value="cashOnDelivery"
                                onChange={() => setPaymentMethod('cashOnDelivery')}
                            />
                            <label htmlFor="cashOnDelivery">Cash On Delivery</label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                name="bkash"
                                id="bkash"
                                value="bkash"
                                onChange={() => setPaymentMethod('bkash')}
                            />
                            <label htmlFor="bkash">Bkash</label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                name="nagad"
                                id="nagad"
                                value="nagad"
                                onChange={() => setPaymentMethod('nagad')}
                            />
                            <label htmlFor="nagad">Nagad</label>
                        </div>
                        <div>
                            <p> If You want to add you name in product   <span className={`mt-4 text-red-600 ${userSelection !== 'Yes' ? 'hidden' : ''}`}>Extraa Cost: 200 tk </span></p>
                            <div>
                                <div>
                                    <label className="mr-4">
                                        <input
                                            type="radio"
                                            name="yesButton"
                                            value="Yes"
                                            checked={userSelection === 'Yes'}
                                            onChange={() => handleSelection('Yes')}
                                            className="mr-2"
                                        />
                                        Yes
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="noButton"
                                            value="No"
                                            checked={userSelection === 'No'}
                                            onChange={() => handleSelection('No')}
                                            className="mr-2"
                                        />
                                        No
                                    </label>
                                </div>
                                {userSelection === 'Yes' && (
                                    <div>
                                        <label className="block mt-4">
                                            <p> Please enter only letters.</p>
                                            <input
                                                type="text"
                                                name='user_name_product'
                                                value={inputValue}
                                                placeholder='Enter Your Name'
                                                onChange={handleInputChange}
                                                className={`border ${inputError ? 'border-red-500' : 'border-gray-300'} p-2 rounded mt-1`}
                                            />
                                        </label>
                                        {inputError && <p className="text-red-500">{inputError}</p>}
                                    </div>

                                )}
                                <div className="mt-4">
                                    <p>Selected: {userSelection}</p>
                                    {userSelection === 'Yes' && <p>Input Value: {inputValue}</p>}
                                </div>
                            </div>
                        </div>
                        <>
                            <h1 className='font-semibold mt-2 mb-2'>Additional Information <span className='text-red-500'>(required*)</span></h1>
                            <div className="relative">
                                <label htmlFor="productName" className="block text-neutral-600 mb-1">
                                    Enter Your Name
                                </label>
                                <input
                                    name="person_name"
                                    type='text'
                                    className="w-full border-gray-300 border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg py-1 px-2"
                                />
                            </div>
                            <div className={`relative mt-4 ${userSelection !== 'Yes' ? 'hidden' : ''}`}>
                                <label htmlFor="personName" className="block text-neutral-600 mb-1">
                                    Your Product Name
                                </label>
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    className="w-full border-gray-300 border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg py-1 px-2"
                                />
                            </div>
                            <div className="relative">
                                <label htmlFor="productName" className="block text-neutral-600 mb-1">
                                    Enter The Amount You Pay
                                </label>
                                <input
                                    name="amount"
                                    type='number'
                                    className="w-full border-gray-300 border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg py-1 px-2"
                                />
                            </div>
                            <div className="relative">
                                <label htmlFor="productName" className="block text-neutral-600 mb-1">
                                    Enter Your Mobile Number
                                </label>
                                <input
                                    name="mobile_number"
                                    type='number'
                                    className="w-full border-gray-300 border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg py-1 px-2"
                                />
                            </div>

                            {(paymentMethod === 'bkash' || paymentMethod === 'nagad') && (
                                <div className="relative">
                                    <label htmlFor="productName" className="block text-neutral-600 mb-1">
                                        Enter {paymentMethod === 'bkash' ? 'Bkash' : 'Nagad'} TransactionID
                                    </label>
                                    <input
                                        name="tran_id"
                                        type='text'
                                        className="w-full border-gray-300 border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg py-1 px-2"
                                    />
                                </div>
                            )}

                            <div className="relative">
                                <label htmlFor="productName" className="block text-neutral-600 mb-1">
                                    Address (please give details address)
                                </label>
                                <input
                                    name="address"
                                    type='text'
                                    className="w-full border-gray-300 border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg py-1 px-2"
                                />
                            </div>
                        </>
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