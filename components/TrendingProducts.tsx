import { getProducts } from "@/lib/actions/actions";
import ProductCard from "./ProductCard";

const TrendingProducts = async () => {
  const products: ProductType[] = await getProducts();

  const trendingProducts = products?.filter((product) =>
    product.collections?.some((collection) => collection.title === "Trending")
  );

  return (
    <div className="flex flex-col items-center gap-10 py-10 px-5">
      <p className="text-heading2-bold">Trending Products</p>
      {!trendingProducts || trendingProducts.length === 0 ? (
        <p className="text-body-bold">No products found</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-10">
          {trendingProducts.slice(0, 10).map((product: ProductType) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TrendingProducts;
