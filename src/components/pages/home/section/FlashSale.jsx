"use client"

import FlashSellingProduct from "@/components/product/flashSale/FlashSellingProduct";
import { useProduct } from "@/hooks/useProducts";
import { Swiper, SwiperSlide } from "swiper/react";
import SlideSection from "../../../loader/productLoader";

const FlashSale = () => {
  const { isLoading, products } = useProduct("flash_sale")

  return (
    <div className="px-1 my-8">
      <div className="flex items-end justify-between">
        <div className="flex gap-2">
          <h4 className="font-extrabold text-2xl text-slate-700 tracking-wide">
            Flash <span className="text-[#FD3851]">Sale</span>
          </h4>
          <div className="flex items-end text-center gap-1 font-mono text-lg font-bold text-yellow-500 cursor-pointer">
            {/* <p>{time.days < 10 ? "0" + time.days : time.days}</p> <span>:</span>
            <p>{time.hours < 10 ? "0" + time.hours : time.hours}</p>{" "}
            <span>:</span>
            <p>{time.minutes < 10 ? "0" + time.minutes : time.minutes}</p>{" "}
            <span>:</span>
            <p>{time.seconds < 10 ? "0" + time.seconds : time.seconds}</p> */}
          </div>
        </div>
        <p className="text-sm tracking-wide mr-1">View All</p>
      </div>

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
        className="flash-sell">
        {
          isLoading ?
            [...Array(10).keys()].map((i) => (
              <SwiperSlide key={i}>
                <SlideSection />
              </SwiperSlide>
            )) :
            products ?
              products.map((item, i) => (
                <SwiperSlide key={i}>
                  <FlashSellingProduct item={item} />
                </SwiperSlide>
              )) : <span>Something want wrong</span>}
      </Swiper>
    </div>
  );
};

export default FlashSale;
