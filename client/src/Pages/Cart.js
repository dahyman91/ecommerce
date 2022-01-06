import React, { useEffect } from "react";
import CartTable from "../Components/CartTable";

function Cart({
  currentUser,
  products,
  cartItems,
  setCartItems,
  cartTotal,
  handleDelete,
}) {
  useEffect(() => {
    fetch("/api/me").then((r) => {
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
    <div style={{ display: "flex" }}>
      <div>
        <CartTable
          getProductDetails={getProductDetails}
          products={products}
          cartItems={cartItems}
          setCartItems={setCartItems}
          handleDelete={handleDelete}
        />
      </div>
      <div style={{ marginTop: "40vh", marginLeft: "35vw" }}>
        <h1 style={{}}>Total ${cartTotal}.00</h1>
        <h1>Checkout Button</h1>
      </div>
    </div>
  );
}

export default Cart;
