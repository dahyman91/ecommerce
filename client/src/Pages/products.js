import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import { Button } from "@mui/material";

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

  const [priceSorted, setPriceSorted] = useState("no");
  const [nameSorted, setNameSorted] = useState("no");
  const [categorySorted, setCategorySorted] = useState("no");

  useEffect(() => {
    if (currentUser && products) {
      fetch("/api/me").then((r) => {
        if (r.ok) {
          r.json().then((user) => setCartItems(user.product_instances));
        }
      });
    }
  }, []);

  function handleSortPrice() {
    if (priceSorted === "no") {
      const sorted = products.sort((a, b) => a.price - b.price);
      setProducts(sorted);
      setPriceSorted("down");
      setNameSorted("no");
      setCategorySorted("no");
    } else if (priceSorted === "down") {
      const sorted = products.sort((a, b) => b.price - a.price);
      setProducts(sorted);
      setPriceSorted("up");
      setNameSorted("no");
      setCategorySorted("no");
    } else {
      fetch("/api/products")
        .then((res) => res.json())
        .then((data) => setProducts(data));
      setPriceSorted("no");
      setNameSorted("no");
      setCategorySorted("no");
    }
  }

  function handleSortName() {
    if (nameSorted === "no") {
      const sorted = products.sort((a, b) => a.name.localeCompare(b.name));
      setProducts(sorted);
      setNameSorted("down");
      setPriceSorted("no");
      setCategorySorted("no");
    } else if (nameSorted === "down") {
      const sorted = products.sort((a, b) => b.name.localeCompare(a.name));
      setProducts(sorted);
      setNameSorted("up");
      setPriceSorted("no");
      setCategorySorted("no");
    } else {
      fetch("/api/products")
        .then((res) => res.json())
        .then((data) => setProducts(data));
      setNameSorted("no");
      setPriceSorted("no");
      setCategorySorted("no");
    }
  }

  function handleSortCategory() {
    if (categorySorted === "no") {
      const sorted = products.sort((a, b) =>
        a.category.localeCompare(b.category)
      );
      setProducts(sorted);
      setNameSorted("no");
      setPriceSorted("no");
      setCategorySorted("down");
    } else if (categorySorted === "down") {
      const sorted = products.sort((a, b) =>
        b.category.localeCompare(a.category)
      );
      setProducts(sorted);
      setNameSorted("no");
      setPriceSorted("no");
      setCategorySorted("up");
    } else {
      fetch("/api/products")
        .then((res) => res.json())
        .then((data) => setProducts(data));
      setNameSorted("no");
      setPriceSorted("no");
      setCategorySorted("no");
    }
  }

  let priceSortEmoji;
  if (priceSorted === "no") {
    priceSortEmoji = "";
  } else if (priceSorted === "down") {
    priceSortEmoji = "⬇️";
  } else {
    priceSortEmoji = "⬆️";
  }

  let nameSortEmoji;
  if (nameSorted === "no") {
    nameSortEmoji = "";
  } else if (nameSorted === "down") {
    nameSortEmoji = "⬇️";
  } else {
    nameSortEmoji = "⬆️";
  }

  let categorySortEmoji;
  if (categorySorted === "no") {
    categorySortEmoji = "";
  } else if (categorySorted === "down") {
    categorySortEmoji = "⬇️";
  } else {
    categorySortEmoji = "⬆️";
  }

  return (
    <>
      <div style={{ height: "90px" }}></div>
      <div
        className="btnsContainer"
        style={{
          height: "40px",
          display: "flex",
          justifyContent: "space-around",
          marginBottom: "30px",
        }}
      >
        <Button onClick={handleSortPrice} variant="outlined">
          Sort By Price {priceSortEmoji}
        </Button>
        <Button onClick={handleSortName} variant="outlined">
          Sort By Name {nameSortEmoji}
        </Button>
        <Button onClick={handleSortCategory} variant="outlined">
          Sort By Category {categorySortEmoji}
        </Button>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gridGap: "2rem",
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
