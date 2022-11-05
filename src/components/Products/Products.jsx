import React from "react";
import "./Product.css";

const Products = (props) => {
  const { name, img, seller, price, ratings } = props;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <p className="product-name">{name}</p>
        <p className="product-price">Price : ${price}</p>
        <small className="product-info1">
          <p>By : {seller}</p>
          <p>Rating : {ratings} Stars</p>
        </small>
      </div>
      <button className="btn-cart">Add to Cart</button>
    </div>
  );
};

export default Products;
