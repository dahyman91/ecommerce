import React, { useState } from "react";
import Card from "@mui/material/Card";
import Link from "@mui/material/Link";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Rating from "@mui/material/Rating";

export default function MultiActionAreaCard({
  product,
  currentUser,
  cartItems,
  updateCart,
}) {
  const [value, setValue] = useState(0);
  function handleAddToCart() {
    const instance = {
      user_id: currentUser.id,
      product_id: product.id,
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
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <Link
          href={`/products/${product.id}`}
          style={{ textDecoration: "none" }}
          variant="body2"
        >
          <CardMedia
            component="img"
            height="140"
            image={product?.primary_image}
            alt="green iguana"
          />

          <CardContent style={{ textAlign: "center" }}>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
            <Typography gutterBottom variant="h5" component="div">
              {product.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Category: {product.category}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.description}
            </Typography>
            <Typography variant="h5" textAlign="center" color="text.secondary">
              ${product.price}
            </Typography>
          </CardContent>
        </Link>
      </CardActionArea>
      <CardActions style={{ justifyContent: "space-around" }}>
        <Button onClick={() => handleAddToCart()} size="small" color="primary">
          Add To Cart
        </Button>

        <Button href={`/products/${product.id}`} size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
