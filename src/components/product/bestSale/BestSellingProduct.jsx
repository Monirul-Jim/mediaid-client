
import { discountCalculator } from "@/utils/generator";
import Image from "next/image";
import Link from "next/link";
import { BiStar } from "react-icons/bi";
import BestSellingButton from "./bestSellingButton";

function BestSellingProduct({ item }) {
    const discountPrice = discountCalculator(item.price, item.discountPercent)
    return (
        <div
            className="bg-white rounded-sm shadow-sm p-1 my-2 mx-1"
        >
            <Link
                href={{ pathname: "/view", query: { product: item.sku } }}>
                <div className="overflow-hidden">
                    <Image
                        src={item.thumbnail}
                        alt="item"
                        width={200}
                        height={200}
                        priority={true}
                        className="object-cover hover:scale-125 transition w-full h-32 rounded-sm"
                    />
                </div>
            </Link>
            <BestSellingButton item={item} />
            <Link
                href={{ pathname: "/view", query: { product: item.sku } }}>
                <h4 className="text-[12px] mt-1 tracking-wide">
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
                            {discountPrice}৳
                        </span>
                    </div>
                    <div className="flex px-1 rounded bg-[#60b8a6] text-white text-sm items-center gap-1">
                        <span>
                            {item.rating}
                        </span>
                        <span>
                            <BiStar />
                        </span>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default BestSellingProduct