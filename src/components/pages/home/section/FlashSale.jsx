"use client"
import FlashSellingProduct from "@/components/product/flashSale/FlashSellingProduct";
import { useProduct } from "@/hooks/useProducts";
import { Swiper, SwiperSlide } from "swiper/react";
import SlideSection from "../../../loader/productLoader";
import { useEffect, useState } from "react";
import axios from "axios";
import useProductData from "@/hooks/useProductData";

const FlashSale = () => {
  const { products, isLoading } = useProductData();
  const filteredProducts = products.filter(product => product.typeOfSelling === "flash_sale");
  const calculateRemainingTime = (endDate) => {
    const now = new Date();
    const endDateTime = new Date(endDate);
    const timeDifference = endDateTime - now;
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

    return {
      days: days < 10 ? "0" + days : days,
      hours: hours < 10 ? "0" + hours : hours,
      minutes: minutes < 10 ? "0" + minutes : minutes,
    };
  };
  const [remainingTime, setRemainingTime] = useState(calculateRemainingTime(filteredProducts[0]?.endDate));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime(calculateRemainingTime(filteredProducts[0]?.endDate));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [filteredProducts]);
  return (
    <div className="px-1 my-8">
      <div className="flex items-end justify-between">
        <div className="flex gap-2">
          <h4 className="font-extrabold text-2xl text-slate-700 tracking-wide">
            Flash <span className="text-[#FD3851]">Sale</span>
          </h4>
          <div className="flex items-end text-center gap-1 font-mono text-lg font-bold text-yellow-500 cursor-pointer">
            <p>{remainingTime.days} days</p>
            <span>:</span>
            <p>{remainingTime.hours} hours</p>
            <span>:</span>
            <p>{remainingTime.minutes} minutes</p>
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
            filteredProducts ?
              filteredProducts.map((item, i) => (
                <SwiperSlide key={i}>
                  <FlashSellingProduct item={item} />
                </SwiperSlide>
              )) : <span>Something want wrong</span>}
      </Swiper>
    </div>
  );
};

export default FlashSale;
