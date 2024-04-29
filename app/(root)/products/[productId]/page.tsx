import Gallery from "@/components/Gallery";
import ProductCard from "@/components/ProductCard";
import ProductInfo from "@/components/ProductInfo";
import { getProductsDetails, getRelatedProducts } from "@/lib/actions/actions";

const ProductDetailsPage = async ({
  params,
}: {
  params: { productId: string };
}) => {
  const productDetails: ProductType = await getProductsDetails(
    params.productId
  );
  const relatedProducts: ProductType[] = await getRelatedProducts(
    productDetails._id
  );

  return (
    <>
      <div className="flex justify-center items-center gap-16 py-10 px-5 max-md:flex-col max-md:items-center">
        <Gallery productMedia={productDetails.media} />
        <ProductInfo productInfo={productDetails} />
      </div>

      <div className="flex flex-col items-center px-10 py-5 md:px-4 max-md:px-3">
        <p className="text-heading3-bold">Related Products</p>
        <div className="flex flex-wrap justify-center gap-16 mx-auto mt-8">
          {relatedProducts?.slice(0, 6)?.map((product: ProductType) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductDetailsPage;
export const dynamic = "force-dynamic";
