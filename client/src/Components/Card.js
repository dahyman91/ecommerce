import * as React from "react";
import Card from "@mui/material/Card";
import Link from "@mui/material/Link";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

export default function MultiActionAreaCard({
  product,
  currentUser,
  cartItems,
  updateCart,
}) {
  function handleAddToCart() {
    const instance = {
      user_id: currentUser.id,
      product_id: product.id,
      quantity: 1,
    };
    fetch("/product_instances", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(instance),
    });
    updateCart(instance);
    console.log(cartItems);
  }
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <Link href={`/products/${product?.id}`} variant="body2">
          <CardMedia
            component="img"
            height="140"
            image={product?.primary_image}
            alt="green iguana"
          />
        </Link>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product?.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product?.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={handleAddToCart} size="small" color="primary">
          Add To Cart
        </Button>

        <Button href={`/products/${product?.id}`} size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
