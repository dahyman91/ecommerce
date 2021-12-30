import React, { useEffect, useState } from "react";

function Cart({ currentUser, products }) {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setCartItems(user.product_instances));
      }
    });
  }, []);

  console.log(products);
  return (
    <div style={{ marginTop: "100px" }}>
      {cartItems && cartItems.map((item) => <h1>{item.product_id}</h1>)}
    </div>
  );
}

export default Cart;
