'use client'
import { discountCalculator } from "@/utils/generator"
import Image from "next/image"
import Link from "next/link"
import FlashButton from "./flashButton"

function FlashSellingProduct({ item }) {

    const discountPrice = discountCalculator(item.price, item.discountPercent)


    return (
        <div className=" shadow-sm">
            <Link
                href={{ pathname: "/view", query: { product: item.sku } }}
                className="bg-white flex flex-col rounded-sm p-1">
                <div className="overflow-hidden">
                    <Image
                        src={item.thumbnail}
                        alt="Product"
                        width={200}
                        height={200}
                        className="object-cover  hover:scale-125 transition  w-full h-[180px] rounded-sm "

                    />
                </div>
                <div>
                    <h4 className="text-[12px] mt-1">
                        {item.title.length > 20
                            ? item.title.slice(0, 20) + "..."
                            : item.title}
                    </h4>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-1">
                            {
                                // Regular Price                                
                                discountPrice !== item.price ?
                                    <del className="text-xs font-mono text-gray-400">
                                        {item.price}
                                    </del> : null
                            }
                            <span className="font-mono text-yellow-500 font-semibold">
                                {
                                    //Discount Price
                                    discountPrice
                                }৳
                            </span>
                        </div>
                        {
                            // Discount Percent
                            discountPrice !== item.price ?
                                <p className="text-[10px] bg-red-600 px-1 py-0.5 text-white rounded-md">
                                    <span>{item.discountPercent}</span>% Off
                                </p> : null
                        }
                    </div>
                </div>
            </Link >

            <FlashButton item={item} />

        </div >
    )
}

export default FlashSellingProduct