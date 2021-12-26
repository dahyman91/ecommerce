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
    <div style={{}}>
      {products.map((product) => {
        return <MultiActionAreaCard product={product} />;
      })}
    </div>
  );
}

export default Products;
