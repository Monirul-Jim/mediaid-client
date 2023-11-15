import { discountCalculator } from "@/utils/generator"
import Image from "next/image"
import Link from "next/link"

function SearchedProduct({ item, setIsSearchList }) {
    const discountPrice = discountCalculator(item.price, item.discountPercent)

    return (
        <div
            className="flex p-1 border-b rounded  items-center justify-between hover:bg-gray-100 cursor-pointer"
        >
            <Link onClick={() => setIsSearchList(false)} href={{ pathname: "/view", query: { product: item.sku } }} className="flex w-full items-center gap-2">
                <Image
                    src={item.thumbnail}
                    alt="image"
                    width={50}
                    height={50}
                    priority={true}
                    className="object-cover rounded"
                />
                <div className="flex flex-col">
                    <p className="font-semibold text-sm">{item.title}</p>
                    <div className="flex gap-2 items-center">
                        {
                            // Discount Percent
                            discountPrice !== item.price ?
                                <p className="text-[10px] bg-[#60B8A6] px-1 py-0.5 text-white rounded-md">
                                    <span>{item.discountPercent}</span>% Off
                                </p> : null
                        }
                        {
                            // Regular Price                                
                            discountPrice !== item.price ?
                                <del className="text-xs font-mono text-gray-400">
                                    {item.price}৳
                                </del> : null
                        }
                        <span className="text-sm">{discountPrice}৳</span>

                    </div>
                </div>
            </Link>
            <div className="h-full px-5 transition rounded cursor-pointer hover:text-[#60B8A6]">
                <span className="text-sm ">View</span>
            </div>
        </div>
    )
}

export default SearchedProduct