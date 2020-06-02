import React from "react";
import { Link } from "react-router-dom";

const products = ["car", "bike", "motorcycle"];

const ProductsListPage = () => {
  const list = products.map((product) => (
    <li key={product}>
      <Link to={`/product/${product}`}>{product}</Link>
    </li>
  ));

  return (
    <div>
      <h1>Lista produktów</h1>
      <div>
        <ul>{list}</ul>
      </div>
      <i>New</i>
    </div>
  );
};

export default ProductsListPage;
