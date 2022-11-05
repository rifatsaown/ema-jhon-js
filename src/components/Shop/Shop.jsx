import React from "react";
import Products from "../Products/Products";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (

    <div className="shop-container">
      <div className="products-container">
        {products.map((product, index) => (
          <Products {...product} key={index} />
        ))}
      </div>

      <div className="cart-container">
        <h3>Order Summary</h3>
        <p>Select Item : </p>
        <p>Total Price : $</p>
      </div>
    </div>
  );
};
export default Shop;
