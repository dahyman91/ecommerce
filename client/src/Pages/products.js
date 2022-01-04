import React from "react";

import MultiActionAreaCard from "../Components/Card";

function Products({
  currentUser,
  products,
  setProducts,
  setCartItems,
  cartItems,
  updateCart,
}) {
  // useEffect(() => {
  //   fetch("/products")
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data));
  // }, []);

  return (
    <>
      <div style={{ height: "100px" }}></div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridGap: "1rem",
          margin: "auto",
          width: "90%",
        }}
      >
        {products &&
          products.map((product) => {
            return (
              <MultiActionAreaCard
                key={product.id}
                currentUser={currentUser}
                product={product}
                products={products}
                setProducts={setProducts}
                cartItems={cartItems}
                setCartItems={setCartItems}
                updateCart={updateCart}
              />
            );
          })}
      </div>
    </>
  );
}

export default Products;
