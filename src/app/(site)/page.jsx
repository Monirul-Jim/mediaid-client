import BestSelling from "@/components/pages/home/section/BestSelling";
import Brands from "@/components/pages/home/section/Brands";
import FlashSale from "@/components/pages/home/section/FlashSale";
import PushProducts from "@/components/pages/home/section/PushProducts";
import Slider from "@/components/pages/home/slider/Slider";

const HomePage = async () => {
    // const fetchData = await fetcher("https://dummyjson.com/products")

    return (
        <div className="p-2 ">
            {/* all home page components will be place here */}
            <div className="md:flex gap-4">
                <div className="w-full md:w-[70%] ">
                    <Slider />
                    {/* <MiniSlider /> */}
                </div>
                <div className="w-full md:w-[30%] max-h-[400px]">
                    <PushProducts />
                </div>
            </div>
            <FlashSale />
            {/* <BrandAdv /> */}
            <BestSelling />
            {/* <OurBrands /> */}
            <Brands />
        </div>
    );
};

export default HomePage;


