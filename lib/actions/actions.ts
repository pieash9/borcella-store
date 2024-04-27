export const getCollections = async () => {
  const collections = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/collections`
  );
  return await collections.json();
};

export const getCollectionDetails = async (collectionId: string) => {
  const collection = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/collections/${collectionId}`
  );
  return await collection.json();
};

export const getProducts = async () => {
  const products = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);
  return await products.json();
};

export const getProductsDetails = async (productId: string) => {
  const products = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products/${productId}`
  );
  return await products.json();
};

export const getSearchedProducts = async (query: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/search/${query}`);
  return await res.json();
};

export const getOrders = async (customerId: string) => {
  const orders = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/orders/customer/${customerId}`
  );
  return await orders.json();
};
