'use client'
import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const DynamicProductShow = ({ params }) => {
    const [productDetails, setProductDetails] = useState([])
    const [activeImages, setActiveImages] = useState([productDetails?.thumbnail]);


    // http://localhost:5000/get-product-admin/65536412c3fff625e53f55fa
    useEffect(() => {
        const getProductData = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/get-product-admin/${params.id}`);
                setProductDetails(response.data);
            } catch (error) {
                console.error('Error fetching product data:', error);
            }
        };

        getProductData();
    }, [params.id]);
    useEffect(() => {
        setActiveImages([productDetails?.thumbnail]);
    }, [productDetails]);
    return (
        <div>
            <div className='flex flex-col md:flex-row gap-6'>

                <div className='w-full'>
                    <div className="w-full h-80 mx-auto border p-2">
                        <Image
                            alt={productDetails?.title?.slice(0, 15)}
                            src={activeImages[0]}
                            width={600}
                            height={600}
                            className="w-full h-full object-contain rounded-sm"
                        />
                    </div>
                    {/* Product sort thumbs */}
                    <div className="mt-2 mb-3">
                        <div className="flex">
                            {[
                                productDetails?.thumbnail,
                                ...(productDetails?.images ? productDetails.images.map(imageObj => imageObj.url) : [])
                            ].map((img, index) => (
                                <div
                                    key={index}
                                    className="mr-2 cursor-pointer border p-1 rounded-sm hover:border-blue-600"
                                    onMouseEnter={() =>
                                        setActiveImages([
                                            img,
                                            ...(productDetails?.images?.map(imageObj => imageObj?.url) || [])
                                        ])
                                    }
                                >
                                    <Image
                                        height={56}
                                        width={64}
                                        alt={`image-${index}`}
                                        src={img}
                                        className="h-14 w-16 object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                </div>


                <div className="border  md:mx-auto mx-2 md:my-3  mb-4  px-6 py-4 w-full">
                    <div className="border h-fit p-2 mt-3 md:p-5 mx-2 md:mx-0">
                        <p className="font-semibold text-sm md:text-base">Highlight:</p>
                    </div>
                    <div
                        className="pb-8 pt-0  text-base leading-normal mt-3 text-gray-600 "
                        id="sect">
                        <h2 className="font-bold text-base  md:text-xl">
                            Products summery and specification
                        </h2>
                        <div>
                            <h3 className="font-bold mt-3 ">Specification :</h3>
                            <p className="text-base leading-4 mt-2 text-gray-600">
                                SKU: {productDetails._id}
                            </p>
                            <p className="text-base leading-4 mt-2 text-gray-600">
                                category: {productDetails?.category}
                            </p>
                            <p className="text-base leading-4 mt-2 text-gray-600">
                                tags:
                                <div className="flex items-center gap-1 my-1">
                                    {productDetails?.tag?.map((tag, index) => (
                                        <div key={index}>
                                            <span className="text-sm py-px px-1 rounded bg-slate-300">
                                                {tag?.tag}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </p>
                            <p className="text-base leading-4 mt-2 text-gray-600">
                                Brand :{productDetails?.brand}
                            </p>
                        </div>
                        <div className=" ">
                            <h3 className="font-bold mt-3 mb-2 ">Summary :</h3>
                            <p className=" text-base lg:leading-tight leading-normal text-gray-600 ">{productDetails?.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DynamicProductShow;