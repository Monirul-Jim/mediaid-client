import ImageBanner from "@/components/pages/viewProduct/ImageBanner";
import ProductQuestionAndAnswer from "@/components/pages/viewProduct/ProductQuestionAndAnswer";
import ProductReviews from "@/components/pages/viewProduct/ProductReviews";
import RelatedProducts from "@/components/pages/viewProduct/RelatedProducts";
import ProductDescription from "@/components/pages/viewProduct/productDescription";
import ProductHandler from "@/components/pages/viewProduct/productHandler";
import ProductInfo from "@/components/pages/viewProduct/productInfo";
import { getProducts, getReviews } from "@/utils/api_config";
import { discountCalculator } from "@/utils/generator";
import { notFound } from "next/navigation";
import { TbCurrencyTaka } from "react-icons/tb";

async function Page({ searchParams }) {
    // Check search params available or not
    if (!searchParams.product) {
        notFound()
    }
    const url = `/api/product?sku=${searchParams.product}`
    const product = await getProducts(url) // Get SSR product
    // console.log(product)

    // check product 
    if (!product) {
        notFound()
    }
    const reviewUrl = `/api/review?product=${product._id}`
    const getReviewData = await getReviews(reviewUrl)

    const discountPrice = discountCalculator(product.price, product.discountPercent)
    return (
        <div className="lg:grid grid-cols-5 relative w-full gap-3 mt-3">
            <div className="lg:sticky top-28 lg:h-screen col-start-1 col-end-3 px-3 md:px-5 lg:px-0">
                <ImageBanner item={product} />
                <div className="md:flex items-center justify-between hidden sm:inline-block w-full ">
                    <ProductHandler />
                </div>
                <div>
                    <div className="mt-4">
                        <h2 className="font-medium text-gray-600">
                            {product.title}
                        </h2>
                        <div className="flex items-center justify-between ">
                            <div className="flex items-center gap-2 mt-2">
                                <div className="flex items-center">
                                    <TbCurrencyTaka size={24} />
                                    <p className="text-2xl font-bold">470</p>
                                </div>
                                <div className="flex items-center text-gray-400">
                                    <TbCurrencyTaka color="gray" />
                                    <del>1999</del>
                                </div>
                                {
                                    discountPrice !== product.price ?
                                        <span className="text-green-500 font-medium">{product.discountPercent}</span>
                                        : null
                                }
                            </div>
                            <div className="flex gap-2 mt-1 items-center">
                                <p className="bg-green-600 w-fit px-1.5 text-white rounded-md ">
                                    4★
                                </p>
                                <p className="text-gray-500">637 Ratings & 70 Reviews</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-start-3 col-end-6 px-3 md:px-5 lg:px-0 mt-5 lg:mt-0">
                <ProductInfo
                    item={product}
                    totalRating={getReviewData.totalRatings}
                    totalReview={getReviewData.totalReview} />
                <ProductDescription item={product} />
                <ProductReviews item={product} totalRating={getReviewData.totalRatings} getReviewData={getReviewData} />
                <ProductQuestionAndAnswer item={product} />
                <RelatedProducts item={product} />
            </div>
            <div className="fixed bottom-[47px] z-[50] h-10 bg-slate-500 w-full grid grid-cols-2 sm:hidden">
                <button className="bg-slate-100 text-gray-700 hover:bg-indigo-600 duration-300 text-sm font-semibold hover:text-white sm:hidden">
                    Add to Cart
                </button>
                <button className=" hover:bg-slate-100 hover:text-gray-700 bg-indigo-600 duration-300 text-sm  font-semibold text-white ">
                    Order Now
                </button>
            </div>
        </div>
    );
}

export default Page

