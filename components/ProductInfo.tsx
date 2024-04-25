"use client";

import { useState } from "react";
import HeartFavorite from "./HeartFavorite";

const ProductInfo = ({ productInfo }: { productInfo: ProductType }) => {
  const [selectedColor, setSelectedColor] = useState(productInfo.colors[0]);
  const [selectedSize, setSelectedSize] = useState(productInfo.sizes[0]);
  return (
    <div className="max-w-[400px] flex flex-col gap-4 ">
      <div className="flex justify-between items-center">
        <p className="text-heading3-bold">{productInfo.title}</p>
        <HeartFavorite product={productInfo} />
      </div>

      <div className="flex gap-2">
        <p className="text-base-medium text-grey-2">Category</p>
        <p className="text-base-bold">{productInfo.category}</p>
      </div>

      <p className="text-heading3-bold">{productInfo.price}</p>

      <div className="flex flex-col gap-2">
        <p className="text-base-medium text-grey-2">Description:</p>
        <p className="text-small-medium">{productInfo.description}</p>
      </div>

      {productInfo.colors.length > 0 && (
        <div className="flex flex-col gap-2">
          <p className="text-base-medium text-grey-2">Colors:</p>
          {
            <div className="flex gap-2">
              {productInfo.colors.map((color, i) => (
                <p
                  key={i}
                  className={`border border-black px-2 py-1 rounded-lg cursor-pointer ${
                    selectedColor === color && "bg-black text-white"
                  }`}
                  onClick={() => setSelectedColor(color)}
                >
                  {color}
                </p>
              ))}
            </div>
          }
        </div>
      )}
      {productInfo.sizes.length > 0 && (
        <div className="flex flex-col gap-2">
          <p className="text-base-medium text-grey-2">Sizes:</p>
          {
            <div className="flex gap-2">
              {productInfo.sizes.map((size, i) => (
                <p
                  key={i}
                  className={`border border-black px-2 py-1 rounded-lg cursor-pointer ${
                    selectedSize === size && "bg-black text-white"
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </p>
              ))}
            </div>
          }
        </div>
      )}
    </div>
  );
};

export default ProductInfo;