import { discountCalculator } from "@/utils/generator";
import { TbCurrencyTaka } from "react-icons/tb";

const ProductInfo = async ({ item, totalRating, totalReview }) => {
    const discountPrice = discountCalculator(item.price, item.discountPercent)

    return (
        <div>
            <h2 className="font-medium text-gray-600">
                {item.title}
            </h2>
            <div className="flex gap-2 mt-1 items-center">
                <p className="bg-green-600 w-fit px-1.5 text-white rounded-md ">{item.rating}★</p>
                <p className="text-gray-500">{totalRating} Ratings & {totalReview} Reviews</p>
            </div>
            <div className="flex items-center gap-2 mt-2">
                <div className="flex items-center">
                    <TbCurrencyTaka size={24} />
                    <p className="text-2xl font-bold">{discountPrice}</p>
                </div>
                <div className="flex items-center text-gray-400">
                    {discountPrice !== item.price ?
                        <>
                            <TbCurrencyTaka color="gray" />
                            <del>{item.price}</del>
                        </> : null
                    }
                </div>
                {
                    // Discount Percent
                    discountPrice !== item.price ?
                        <span className="text-green-500 font-medium">
                            {item.discountPercent}%
                        </span>
                        :
                        null
                }
            </div>
        </div>
    );
};

export default ProductInfo;
