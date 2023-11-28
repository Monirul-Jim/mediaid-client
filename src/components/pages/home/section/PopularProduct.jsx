'use client'
import useProductData from '@/hooks/useProductData';
import React from 'react';
import ProductLoader from '@/components/loader/productLoader';
import BestSellingProduct from "@/components/product/bestSale/BestSellingProduct";
import { Swiper, SwiperSlide } from "swiper/react";

const PopularProduct = () => {
    const { products, isLoading } = useProductData();
    const filteredProducts = products.filter(product => product.typeOfSelling === "popular_product");
    return (
        <div className="px-1 mt-4">
            <div className="flex items-end justify-between">
                <h4 className="md:font-extrabold md:text-2xl text-slate-700 tracking-wide">
                    Popular <span className="text-[#FD3851]">Product</span>
                </h4>
                <p className="text-sm tracking-wide mr-1">View All</p>
            </div>


            {/* Column 1 */}
            <Swiper
                breakpoints={{
                    // when window width is >= 640px
                    200: {
                        slidesPerView: 2.5,
                    },
                    640: {
                        slidesPerView: 4,
                    },
                    // when window width is >= 768px
                    768: {
                        slidesPerView: 6,
                    },
                }}
                spaceBetween={10}
                className=" my-1">
                {
                    isLoading ?
                        [...Array(10).keys()].map((i) => (
                            <SwiperSlide key={i}>
                                <ProductLoader />
                            </SwiperSlide>
                        )) : filteredProducts ?
                            filteredProducts.slice(0, 10).map((item, i) => (
                                <SwiperSlide key={i}>
                                    <BestSellingProduct item={item} />
                                </SwiperSlide>
                            )) : <span>Something want wrong</span>}
            </Swiper>
            {/* Column 2 */}
            <Swiper
                breakpoints={{
                    // when window width is >= 640px
                    200: {
                        slidesPerView: 2.5,
                    },
                    640: {
                        slidesPerView: 4,
                    },
                    // when window width is >= 768px
                    768: {
                        slidesPerView: 6,
                    },
                }}
                spaceBetween={10}
                className=" my-1">
                {
                    isLoading ?
                        [...Array(10).keys()].map((i) => (
                            <SwiperSlide key={i}>
                                <ProductLoader />
                            </SwiperSlide>
                        )) : filteredProducts ?
                            filteredProducts.slice(10, 20).map((item, i) => (
                                <SwiperSlide key={i}>
                                    <BestSellingProduct item={item} />
                                </SwiperSlide>
                            )) : <span>Something want wrong</span>}
            </Swiper>

        </div>
    );
};

export default PopularProduct;