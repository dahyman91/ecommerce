import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Parallax, Background } from "react-parallax";
import photo from "../Assets/photo.jpeg";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";

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

function Product({ currentUser, updateCart, setCartItems, products, users }) {
  const { product } = useParams();
  const [selectedProduct, setSelectedProduct] = useState({});

  useEffect(() => {
    fetch(`/api/products/${product}`)
      .then((res) => res.json())
      .then((data) => setSelectedProduct(data));
  }, [product]);

  useEffect(() => {
    if (selectedProduct) {
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
    }).then(() => updateCart(instance));
  }

  function getUserFirstName(input_id) {
    let user = users.length && users.filter((user) => input_id === user.id);
    return user[0]?.first_name;
  }

  return (
    <>
      <div className="product-container">
        <div style={styles}>
          <Parallax
            bgImage={selectedProduct.primary_image}
            strength={-200}
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

            {selectedProduct.average_review > 0 ? (
              <Rating
                name="simple-controlled"
                precision={0.5}
                value={selectedProduct.average_review}
                readOnly
              />
            ) : (
              <>
                <Rating value={0} readOnly /> <p>No Reviews Yet</p>
              </>
            )}
            <p style={{ marginTop: "30px" }}>Description:</p>
            <p style={{}}>{selectedProduct.description}</p>
            <p style={{ marginTop: "10px" }}>Price:</p>
            <p style={{}}>${selectedProduct.price}</p>
          </div>
        </div>
      </div>

      <div>
        <div style={{ width: "100vw", marginTop: "5vh" }}>
          {selectedProduct.reviews &&
            selectedProduct.reviews.map((review) => {
              console.log(getUserFirstName(review.user_id));
              return (
                <div
                  style={{
                    height: "5vh",
                    width: "80vw",
                    display: "flex",
                    margin: "auto",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <p style={{}}>{getUserFirstName(review.user_id)}</p>
                  <Rating
                    name="simple-controlled"
                    precision={0.5}
                    value={review.rating}
                    readOnly
                  />

                  {review.content ? <p>review.content</p> : <p></p>}
                </div>
              );
            })}
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
          strength={400}
          renderLayer={(percentage) => (
            <div
              style={{
                width: "100%",
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%,-50%)",
                zIndex: "1",
              }}
            >
              <Button href="/products" style={insideStyles}>
                Back To Store
              </Button>
              <div
                style={{
                  position: "absolute",
                  background: `rgba(255, 125, 0, ${percentage * 1.2})`,
                  left: "50%",
                  top: "50%",
                  borderRadius: "50%",
                  transform: "translate(-50%,-50%)",
                  width: 300,
                  height: 300,
                  zIndex: "-1",
                }}
              />
            </div>
          )}
        >
          <div style={{ height: 500 }}></div>
        </Parallax>

        <Parallax strength={100}>
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
      </div>
    </>
  );
}

export default Product;
