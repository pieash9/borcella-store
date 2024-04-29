import Collections from "@/components/Collections";
import CustomerFeedback from "@/components/CustomerFeedback";
import LatestProduct from "@/components/LatestProduct";
import Newsletter from "@/components/Newsletter";
import ProductList from "@/components/ProductList";
import TrendingProducts from "@/components/TrendingProducts";
import Image from "next/image";

const HomePage = () => {
  return (
    <>
      <Image
        src="/banner.png"
        alt="banner"
        width={2000}
        height={1000}
        className="w-screen"
      />
      <Collections />
      <ProductList />
      <LatestProduct />
      <TrendingProducts />
      <CustomerFeedback />
      <Newsletter />
    </>
  );
};

export default HomePage;
export const dynamic = "force-dynamic";
