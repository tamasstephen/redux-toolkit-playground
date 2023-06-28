import React from "react";
import { useEffect, useState } from "react";
import dataHandler from "../dataHandler/dataHandler";

const Products = () => {
  const [products, setProducts] = useState<{ error: string; data: Array<any> }>(
    { error: "", data: [] }
  );
  useEffect(() => {
    dataHandler.getProducts().then((data) => {
      if (data?.error) {
        setProducts({ error: data.error, data: [] });
      } else {
        console.log(data);
      }
    });
  });

  return <div>Products</div>;
};

export default Products;
