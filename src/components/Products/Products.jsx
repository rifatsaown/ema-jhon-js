import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from "react";
import "./Product.css";

const Products = (props) => {
  const { name, img, seller, price, ratings, handleAddToCart } = props;

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
      <button onClick={() => handleAddToCart(props)} className="btn-cart">
        <span className="btn-text">Add to Cart</span>
        <FontAwesomeIcon icon={faShoppingCart}/>
      </button>
    </div>
  );
};

export default Products;
