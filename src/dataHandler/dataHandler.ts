const dataHandler = {
  get: async (url: string) => {
    const response = await fetch(url);
    if (!response.ok) {
      return { error: "Something went wrong! Could not fetch data." };
    }
    return await response.json();
  },
  getProducts: async () => {
    return await dataHandler.get("https://dummyjson.com/products");
  },
  getProduct: async (id: string) => {
    return await dataHandler.get(`https://dummyjson.com/product/${id}`);
  },
};

export default dataHandler;
