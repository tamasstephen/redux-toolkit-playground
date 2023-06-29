import React from "react";
import { useEffect, useState } from "react";
import dataHandler from "../dataHandler/dataHandler";
import { Product } from "../types/index";
import ProductItem from "./ProductItem";
import "../styles/Products.css";

const Products = () => {
  const [products, setProducts] = useState<{
    error: string;
    data: Array<Product>;
  }>({ error: "", data: [] });
  useEffect(() => {
    dataHandler.getProducts().then((data) => {
      if (data?.error) {
        setProducts({ error: data.error, data: [] });
      } else {
        console.log(data);
        setProducts({ error: "", data: [...products.data, ...data.products] });
      }
    });
  }, []);

  return (
    <div>
      <ul className="porducts-list">
        {products.data.map((product) => {
          return (
            <li className="products-list__item" key={product.id}>
              <ProductItem
                title={product.title}
                thumbnail={product.thumbnail}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Products;
