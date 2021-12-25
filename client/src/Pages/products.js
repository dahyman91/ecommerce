import React, { useEffect, useState } from "react";

import Link from "@mui/material/Link";
function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const request = fetch("/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
    console.log(request);
  }, []);

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
