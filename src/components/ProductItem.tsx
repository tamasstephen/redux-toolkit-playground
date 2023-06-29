import React from "react";
import type { Product } from "../types/index";
import "../styles/ProductItem.css";

const ProductItem = ({
  title,
  thumbnail,
}: Pick<Product, "title" | "thumbnail">) => {
  return (
    <div className="product-item">
      <img className="product-item__image" src={thumbnail} alt={title} />
      <h3 className="product-item__title">{title}</h3>
    </div>
  );
};

export default ProductItem;
