import React, { useState, useEffect } from "react";
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
  updateCart,
}) {
  const [value, setValue] = useState(parseFloat(product.average_review));
  const [reviewed, setReviewed] = useState(false);

  function handleReview(e, value) {
    const review = {
      user_id: currentUser.id,
      product_id: product.id,
      rating: parseFloat(e.target.value),
      content: "",
    };
    setValue(e.target.value);
    fetch("/api/reviews", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    }).then(setReviewed(true));
  }

  function truncateString(str, num) {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + "...";
  }

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
              precision={0.5}
              value={value}
              onChange={(e) => handleReview(e, value)}
            />
            <Typography gutterBottom variant="h5" component="div">
              {truncateString(product.name, 19)}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Category: {product.category}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {truncateString(product.description, 50)}
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
