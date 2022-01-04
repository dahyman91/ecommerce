import React, { useEffect, useState } from "react";
import CartTable from "../Components/CartTable";

function Cart({ currentUser, products, cartItems, setCartItems }) {
  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setCartItems(user.product_instances));
      }
    });
  }, [currentUser, setCartItems]);
  function getProductDetails(id) {
    let product = products.filter((product) => id === product.id);
    return product;
  }

  return (
    <>
      <ul>
        {cartItems.length &&
          cartItems.map((item) => {
            let product = getProductDetails(item.product_id);
            return (
              <>
                <li key={product.id}>
                  <h1>{product[0]?.price}</h1>
                  <h1>{product[0]?.name}</h1>
                </li>
              </>
            );
          })}
      </ul>
      <CartTable />
    </>
  );
}

export default Cart;
