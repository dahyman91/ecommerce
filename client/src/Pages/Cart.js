import React, { useEffect } from "react";
import CartTable from "../Components/CartTable";
import { Button } from "@mui/material";
import { useHistory } from "react-router-dom";

function Cart({
  currentUser,
  products,
  cartItems,
  setCartItems,
  cartTotal,
  handleDelete,
  updateCart,
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

  let history = useHistory();

  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          textAlign: "center",
          marginTop: "80px",
          width: 700,
          margin: "80px auto",
        }}
      >
        {cartTotal ? <h1 style={{}}>Total ${cartTotal}.00</h1> : null}

        <CartTable
          getProductDetails={getProductDetails}
          products={products}
          cartItems={cartItems}
          setCartItems={setCartItems}
          handleDelete={handleDelete}
          updateCart={updateCart}
          currentUser={currentUser}
        />
        <Button
          style={{ margin: "20px" }}
          variant="outlined"
          onClick={() => history.push("/checkout")}
        >
          Checkout
        </Button>
      </div>
    </div>
  );
}

export default Cart;
