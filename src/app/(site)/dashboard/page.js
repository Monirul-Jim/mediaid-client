'use client'
import useCustomerData from '@/hooks/useCustomerData';
import { CgMenuMotion } from "react-icons/cg";
import React from 'react';
import Link from 'next/link';

const OrderDashboard = () => {
    const { orders } = useCustomerData()
    return (
        <div className="border w-screen lg:w-full">
            <div className="p-4">
                <div className="overflow-x-auto">
                    <table className="table table-compact ">
                        <thead>
                            <tr>
                                <th>Order</th>
                                <th>Date</th>
                                <th>Mobile No:</th>
                                <th>Transaction ID</th>
                                <th>Ship To</th>
                                <th>Status</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((orderList) => (
                                <tr key={orderList._id}>
                                    <td>
                                        <span className="flex flex-col">
                                            <span className="p-0 text-violet-500 text-sm font-bold hover:underline">
                                                {orderList?._id}
                                            </span>
                                            <span className="text-gray-400 font-normal">
                                                {" "}
                                                {orderList?.savedInfo?.name}
                                            </span>
                                        </span>
                                    </td>
                                    <td>{orderList?.savedInfo?.formattedDate}</td>
                                    <td>{orderList?.savedInfo?.mobile}</td>
                                    <td>{orderList?.savedInfo?.tran_id}</td>
                                    <td>{orderList?.savedInfo?.address}</td>
                                    <td>
                                        <div className="flex items-center justify-between gap-1 bg-[#fde6d8] text-[#9d5228] rounded-lg tracking-wide px-2 py-1 font-bold">
                                            <p>{orderList?.status} </p>
                                            <CgMenuMotion size={15} color="#00864e" />
                                        </div>
                                    </td>
                                    <td>
                                        <Link className="p-0 text-violet-500 text-sm font-bold hover:underline" href={`/orderdetails/${orderList._id}`}>
                                            Details
                                        </Link>
                                    </td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};


export default OrderDashboard;