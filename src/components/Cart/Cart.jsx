import React from "react";
import "./Cart.css";

export default function Cart({ cart }) {
  let shipping = 0;
  let total = 0;
  for (const product of cart) {
    total = total + product.price;
    shipping = shipping + product.shipping;
  }
  let tax = Math.ceil((total + shipping) * 0.1);
  let grandTotal = total + shipping + tax;

  return (
    <div className="cart">
      <h2>Order Summary</h2>
      <p>Select Item : {cart.length}</p>
      <p>Total Price : ${total}</p>
      <p>Shipping Charge : ${shipping}</p>
      <p>Tax : ${tax}</p>
      <h4>Grand Total : ${grandTotal}</h4>
    </div>
  );
}
