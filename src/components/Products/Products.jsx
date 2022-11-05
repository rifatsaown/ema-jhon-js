import React from "react";
import './Product.css';

const Products = (props) => {
  const { name, img, seller, price, ratings } = props;
  return (
    <div className="product">
      <img src={img} alt="" />
      <p className="product-name">{name}</p>
      <p>Price : ${price}</p>
      <small>
      <p>By : {seller}</p>
      <p>Rating : {ratings}</p>
      </small>
    </div>
  );
};

export default Products;
