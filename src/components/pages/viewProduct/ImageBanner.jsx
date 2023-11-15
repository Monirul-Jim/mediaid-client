'use client'
import Image from "next/image";
import { useEffect, useState } from "react";

const ImageBanner = ({ item }) => {

    const [activeImage, setActiveImage] = useState(item.thumbnail)
    console.log(item.thumbnail)
    useEffect(() => {
        setActiveImage(item.thumbnail)
    }, [item])


    return (
        <div>
            <div className="w-full h-80 mx-auto border p-2">
                <Image
                    alt={item.title.slice(0, 15)}
                    src={activeImage}
                    width={600}
                    height={600}
                    className="w-full h-full  object-contain rounded-sm"
                />
            </div>
            {/* Product sort thumbs */}
            <div className="mt-2 mb-3">
                <div className="flex">
                    {[item.thumbnail, ...item.images].map((img, index) => (
                        <div
                            key={index}
                            className="mr-2 cursor-pointer border p-1 rounded-sm hover:border-blue-600"
                            onMouseEnter={() => setActiveImage(img)}
                        >
                            <Image
                                height={56}
                                width={64}
                                alt={"image"}
                                src={img}
                                className="h-14 w-16 object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ImageBanner;
