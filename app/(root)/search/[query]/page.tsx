import ProductCard from "@/components/ProductCard";
import { getSearchedProducts } from "@/lib/actions/actions";

const SearchPage = async ({ params }: { params: { query: string } }) => {
  const searchedProducts: ProductType[] = await getSearchedProducts(
    params.query
  );
  const decodedQuery = decodeURIComponent(params.query);

  return (
    <div className="px-10 py-5">
      <p className="text-heading4-bold my-10">
        Search result for : {decodedQuery}
      </p>
      {!searchedProducts ||
        (searchedProducts.length === 0 && (
          <p className="text-body-medium my-5">No result found</p>
        ))}
      <div className="flex flex-wrap  gap-16">
        {searchedProducts?.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
export const dynamic = "force-dynamic";
