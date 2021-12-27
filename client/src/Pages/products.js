import React, { useEffect, useState } from "react";

import MultiActionAreaCard from "../Components/Card";
function Products({ currentUser }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const request = fetch("/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
    console.log(request);
  }, []);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridGap: "1rem",
        marginTop: "100px",
        margin: "auto",
        width: "90%",
      }}
    >
      {products.map((product) => {
        return <MultiActionAreaCard product={product} />;
      })}
    </div>
  );
}

export default Products;
