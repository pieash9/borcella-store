import Gallery from "@/components/Gallery";
import { getProductsDetails } from "@/lib/actions";

const ProductDetailsPage = async ({
  params,
}: {
  params: { productId: string };
}) => {
  const productDetails: ProductType = await getProductsDetails(
    params.productId
  );

  return (
    <div className="flex justify-center items-center gap-16 py-10 px-5 max-md:flex-col max-md:items-center">
      <Gallery productMedia={productDetails.media} />
    </div>
  );
};

export default ProductDetailsPage;
