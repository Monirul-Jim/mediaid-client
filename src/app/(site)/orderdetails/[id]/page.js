'use client'
import OrderedProductTable from '@/components/OrderedProductTable/OrderedProductTable';
import React, { useEffect, useState } from 'react';

const DynamicSingleIdProduct = ({ params }) => {
    const [productData, setProductData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://mediaaid-server.vercel.app/user-order-collection/${params.id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch product data');
                }
                const data = await response.json();
                setProductData(data);
            } catch (error) {
                console.error('Error fetching product data:', error);
            }
        };
        fetchData();
    }, [params.id]);
    const parsedData = productData.parseItem ? JSON.parse(productData.parseItem.cartState) : null;
    const cartItems = parsedData ? parsedData.cartItems : [];
    return (
        <div>
            <div className="text-sm breadcrumbs md:ml-4">
                <ul>
                    <li>
                        <a>Dashboard</a>
                    </li>
                    <li>Order Details</li>
                </ul>
            </div>
            <div className="w-full min-h-screen p-2">
                <div className="h-fit  w-full bg-slate-50 rounded p-3 shadow-md">
                    <h1 className="text-base md:text-xl font-semibold text-gray-700">
                        Order Details: #{productData?._id}
                    </h1>
                    <p className="text-xs md:text-sm text-slate-500">
                        {productData?.savedInfo?.formattedDate}
                    </p>
                    <div className="text-base md:text-lg font-semibold text-gray-600 mt-2 flex items-center gap-1">
                        Your product in: {productData?.status}
                        <div
                            className={`px-2 ${"bg-green-300"}  bg-opacity-30 rounded-full`}>
                        </div>
                    </div>
                </div>

                <div className="h-fit  w-full bg-slate-50 rounded p-3 shadow-md mt-4">
                    <OrderedProductTable cartItems={cartItems} />
                </div>
            </div>
        </div>
    );
};

export default DynamicSingleIdProduct;