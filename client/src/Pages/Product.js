import React, { useEffect, useState } from "react";
import { Parallax, Background } from "react-parallax";
import photo from "../Assets/photo.jpeg";
import { useParams } from "react-router-dom";

import Button from "@mui/material/Button";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  marginTop: "15vh",
  width: "100%",
  marginLeft: "15vw",
  display: "flex",
};
const insideStyles = {
  background: "white",
  borderRadius: "10px",
  position: "absolute",
  top: "70%",
  left: "50%",
  transform: "translate(-50%,-50%)",
};

function Product({ currentUser, updateCart, setCartItems, products }) {
  const { product } = useParams();
  const [selectedProduct, setSelectedProduct] = useState({});

  useEffect(() => {
    fetch(`/api/products/${product}`)
      .then((res) => res.json())
      .then((data) => setSelectedProduct(data));
  }, [product]);

  useEffect(() => {
    if (currentUser && products) {
      fetch("/api/me").then((r) => {
        if (r.ok) {
          r.json().then((user) => setCartItems(user.product_instances));
        }
      });
    }
  }, []);

  function handleAddToCart() {
    const instance = {
      user_id: currentUser.id,
      product_id: selectedProduct.id,
      quantity: 1,
    };
    fetch("/api/product_instances", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(instance),
    });
    updateCart(instance);
  }
  return (
    <>
      <div>
        <div style={styles}>
          <Parallax
            bgImage={selectedProduct.primary_image}
            strength={500}
            style={{ borderRadius: "10%" }}
          >
            <div style={{ height: 500, width: "30vw" }}>
              <div>
                <h3>{selectedProduct.name}</h3>
                <Button
                  onClick={() => handleAddToCart()}
                  style={insideStyles}
                  variant="outlined"
                >
                  Add {selectedProduct.name} to Cart
                </Button>
              </div>
            </div>
          </Parallax>
          <div style={{ marginLeft: "10vw", marginTop: "10%", width: "20vw" }}>
            <h2>{selectedProduct.name}</h2>
            <p style={{ marginTop: "30px" }}>Description:</p>
            <p style={{}}>{selectedProduct.description}</p>
            <p style={{ marginTop: "10px" }}>Price:</p>
            <p style={{}}>${selectedProduct.price}</p>
          </div>
        </div>
      </div>

      <div
        style={{
          fontFamily: "sans-serif",
          textAlign: "center",
          marginTop: "10vh",
          width: "auto",
          height: "100vh",
        }}
      >
        <Parallax
          bgImage={[photo]}
          strength={200}
          renderLayer={(percentage) => (
            <div>
              <div
                style={{
                  position: "absolute",
                  background: `rgba(255, 125, 0, ${percentage * 1.2})`,
                  left: "50%",
                  top: "50%",
                  borderRadius: "50%",
                  transform: "translate(-50%,-50%)",
                  width: "20%",
                  height: 100,
                }}
              />
            </div>
          )}
        >
          <div style={{ height: 500 }}>
            <div style={insideStyles}>Back To Store</div>
          </div>
        </Parallax>

        <Parallax strength={500}>
          <Background className="custom-bg">
            <div
              style={{
                height: 2000,
                width: 2000,
                backgroundImage: "url('https://i.imgur.com/8CV5WAB.png')",
              }}
            />
          </Background>
        </Parallax>
        <div style={{ height: 500 }} />
      </div>
    </>
  );
}

export default Product;
