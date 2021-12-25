import React, { useEffect, useState } from "react";
import { Parallax, Background } from "react-parallax";
import photo from "../Assets/photo.jpeg";
import { useParams } from "react-router-dom";

import Button from "@mui/material/Button";
import { selectClasses } from "@mui/material";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  width: "80%",
  margin: "auto",
};
const insideStyles = {
  background: "white",
  borderRadius: "10px",
  position: "absolute",
  top: "70%",
  left: "50%",
  transform: "translate(-50%,-50%)",
};

function Product({}) {
  const { product } = useParams();
  const [selectedProduct, setSelectedProduct] = useState(null);

  console.log(selectedProduct);

  useEffect(() => {
    fetch(`/products/${product}`)
      .then((res) => res.json())
      .then((data) => setSelectedProduct(data));
  }, []);

  return (
    <>
      <div style={styles}>
        <Parallax bgImage={selectedProduct.primary_image} strength={500}>
          <div style={{ height: 500 }}>
            <div>
              <h3>{product}</h3>
              <Button style={insideStyles} variant="outlined">
                Buy {product}
              </Button>
            </div>
          </div>
        </Parallax>

        <h2>{product}</h2>

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
                  width: percentage * 700,
                  height: percentage * 700,
                }}
              />
            </div>
          )}
        >
          <div style={{ height: 500 }}>
            <div style={insideStyles}>renderProp</div>
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
