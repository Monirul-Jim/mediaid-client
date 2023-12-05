// import Link from "next/link";

// const PaymentMethod = () => {
//   // { title, paymentIconLink, isOpen, onClick, children }
//   const handleFormSubmit = async (event) => {
//     event.preventDefault();
//     const form = event.target;
//     const name = form.person_name.value;
//     const mobile = form.mobile_number.value;
//     const tran_id = form.tran_id.value;
//     const savedInfo = { name, mobile, tran_id }
//   }
//   var isOpen = true
//   return (
//     <form onSubmit={handleFormSubmit} method="dialog" className="border rounded-lg mb-2 model-box">

//       <div className="relative">
//         <label
//           htmlFor="productName"
//           className="block text-neutral-600 mb-1">
//           Enter Your Name
//         </label>
//         <input name="person_name" type='text' className="w-full border-gray-300 border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg py-1 px-2" />
//       </div>
//       <div className="relative">
//         <label
//           htmlFor="productName"
//           className="block text-neutral-600 mb-1">
//           Enter Your Mobile Number
//         </label>
//         <input name="mobile_number" type='number' className="w-full border-gray-300 border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg py-1 px-2" />
//       </div>
//       <div className="relative">
//         <label
//           htmlFor="productName"
//           className="block text-neutral-600 mb-1">
//           Enter Bkash/Nagad TransactionID
//         </label>
//         <input name="tran_id" type='text' className="w-full border-gray-300 border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg py-1 px-2" />
//       </div>

//       <div className="w-[420px] p-2">
//         <p className="text-sm text-gray-600">
//           Your personal data will be used to process your order, support
//           your experience throughout this website, and for other purposes
//           described in our{" "}
//           <Link className="text-blue-800" href="">
//             privacy policy
//           </Link>
//           .
//         </p>
//         <div className="flex items-center mt-4 gap-2">
//           <input
//             type="checkbox"
//             className="checkbox checkbox-sm cursor-pointer "
//           />
//           <p className="text-sm">
//             I have read and agree to the website{" "}
//             <Link className="text-blue-800 underline" href="">
//               terms and conditions
//             </Link>
//             *
//           </p>
//         </div>
//       </div>
//       <button type="submit" className="text-center cursor-pointer bg-[#101B7A] w-full font-bold text-white py-2 mt-3 rounded-sm">
//         Place order
//       </button>
//     </form>
//     // <></>
//   );
// };

// export default PaymentMethod;
