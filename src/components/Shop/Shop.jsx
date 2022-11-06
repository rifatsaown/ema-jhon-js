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
  const handleAddToCart = (product) => {
    console.log(product);
  };
  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Products
            product={product}
            handleAddToCart={handleAddToCart}
            key={product.id}
          />
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
