import { productListResponseSchema } from "../types";

const dataHandler = {
  get: async (url: string) => {
    const response = await fetch(url);
    if (!response.ok) {
      return { error: "Something went wrong! Could not fetch data." };
    }
    const data = await response.json();
    try {
      productListResponseSchema.parse(data);
      //console.log(data);
      return data;
    } catch (error) {
      return { error: "Something went wrong! Could not parse data." };
    }
  },
  getProducts: async () => {
    return await dataHandler.get("https://dummyjson.com/products");
  },
  getProduct: async (id: string) => {
    return await dataHandler.get(`https://dummyjson.com/product/${id}`);
  },
};

export default dataHandler;
