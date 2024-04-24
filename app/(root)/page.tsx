import Collections from "@/components/Collections";
import ProductList from "@/components/ProductList";
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
    </>
  );
};

export default HomePage;
