import React, { useState } from "react";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
function Products() {
  const [products, setProducts] = useState(["one", "two", "three"]);

  return (
    <ul>
      {products.map((product) => {
        return (
          <li>
            <Button>
              <Link href={`/products/${product}`} variant="body2">
                {product}
              </Link>
            </Button>
          </li>
        );
      })}
    </ul>
  );
}

export default Products;
