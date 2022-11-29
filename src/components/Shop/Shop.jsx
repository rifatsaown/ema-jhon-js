import React from "react";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Products from "../Products/Products";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = React.useState([]);
  const [cart, setCart] = React.useState([]);

  React.useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  React.useEffect(() => {
    const stordCart = getStoredCart();
    for(const id  in stordCart){
      console.log(id);
    }
  }, [cart]);

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.id);
  };

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (<Products {...product} handleAddToCart={handleAddToCart} key={product.id}/>))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}/>
      </div>
    </div>
  );
};

export default Shop;
