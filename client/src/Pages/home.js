import React from "react";
import Link from "@mui/material/Link";
import { Parallax } from "react-parallax";
import photo from "../Assets/photo.jpeg";

import Button from "@mui/material/Button";

function home() {
  const inlineStyle1 = {
    background: "#fff",
    position: "absolute",
    left: "50%",
    top: "50%",
    padding: "20px",
    transform: "translate(-50%, -50%)",
  };

  return (
    <Parallax
      bgImage={photo}
      style={{ width: "70%", margin: "auto" }}
      strength={1000}
    >
      <div style={{ height: "200vh" }}>home</div>
      <div>
        <Button href={"/products"} style={inlineStyle1}>
          Products
        </Button>
      </div>
    </Parallax>
  );
}

export default home;
