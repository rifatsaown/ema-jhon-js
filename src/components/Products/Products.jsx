import React from "react";
import "./Product.css";

const Products = (props) => {
  const { name, img, seller, price, ratings } = props;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <p className="product-name">{name}</p>
        <p>Price : ${price}</p>
        <p>
          <small>By : {seller}</small>
        </p>
        <p>
          <small>Rating : {ratings} Stars</small>
        </p>
      </div>
      <button className="btn-cart">Add to Cart</button>
    </div>
  );
};

export default Products;
