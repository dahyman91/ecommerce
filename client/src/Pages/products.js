import React, { useEffect, useState } from "react";

import MultiActionAreaCard from "../Components/Card";
function Products({ currentUser, products }) {
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
        {products.map((product) => {
          return (
            <MultiActionAreaCard currentUser={currentUser} product={product} />
          );
        })}
      </div>
    </>
  );
}

export default Products;
