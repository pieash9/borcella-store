"use client";

import Image from "next/image";
import { useState } from "react";

const Gallery = ({ productMedia }: { productMedia: string[] }) => {
  const [mainImage, setMainImage] = useState(productMedia[0]);
  return (
    <div className="flex flex-col gap-3 max-w-[500px]">
      <Image
        src={mainImage}
        width={800}
        height={800}
        alt="product"
        className="size-96 rounded-lg shadow-lg object-cover object-top"
      />
      <div className="flex gap-2 overflow-auto tailwind-scrollbar-hide">
        {productMedia.map((image, i) => (
          <Image
            src={image}
            key={i}
            alt="product"
            width={200}
            height={200}
            className={`size-20 cursor-pointer object-cover object-top rounded-lg ${
              mainImage === image ? "border-2 border-black" : ""
            }`}
            onClick={() => setMainImage(image)}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
