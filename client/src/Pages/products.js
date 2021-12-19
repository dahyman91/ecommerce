import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import Link from "@mui/material/Link";
function Products({ products, url, setUrl, setProducts }) {
  useEffect(() => {
    setUrl("/products");
  }, [url, setUrl]);

  // Triggers when window changes

  // window.onpopstate = fetch("/products")
  //   .then((res) => res.json())
  //   .then((data) => setProducts(data));

  return (
    <ul style={{ paddingTop: "75px" }}>
      {products.map((product) => {
        return (
          <li key={product.id}>
            <Link href={`/products/${product.id}`} variant="body2">
              {product.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default Products;