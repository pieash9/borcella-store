import { getProducts } from "@/lib/actions/actions";
import ProductCard from "./ProductCard";

const LatestProduct = async () => {
  const products: ProductType[] = await getProducts();

  const sortedProducts = products.sort(
    (a, b) => new Date(a.createdAt).valueOf() - new Date(b.createdAt).valueOf()
  );
  return (
    <div className="flex flex-col items-center gap-10 py-10 px-5">
      <p className="text-heading2-bold">Latest Products</p>
      {!sortedProducts || sortedProducts.length === 0 ? (
        <p className="text-body-bold">No products found</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-10">
          {sortedProducts.slice(0, 10).map((product: ProductType) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default LatestProduct;
