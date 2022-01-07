import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export default function CartTable({
  cartItems,
  setCartItems,
  products,
  getProductDetails,
  updateCart,
  currentUser,
}) {
  function handleAddToCart(product) {
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

  function handleRemoveFromCart(product) {
    const instance = {
      user_id: currentUser.id,
      product_id: product.id,
      quantity: 1,
    };
    fetch("/api/product_instances/update", {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(instance),
    })
      .then((r) => r.json())
      .then((res) => console.log(res))
      .then(() => updateCart(instance));
  }

  return (
    <TableContainer
      // style={{
      //   marginTop: "80px",
      //   maxWidth: 500,
      //   marginLeft: "10vw",
      // }}
      component={Paper}
    >
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Total</TableCell>
            <TableCell>Remove</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cartItems
            .sort((a, b) => a.product_id - b.product_id)
            .map((item) => {
              let product = getProductDetails(item.product_id);
              return (
                <>
                  {product[0] && (
                    <TableRow>
                      <TableCell component="th" scope="row">
                        {product[0].name}
                      </TableCell>
                      <TableCell>${product[0].price}.00</TableCell>
                      <TableCell
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          textAlign: "center",
                          height: "100%",
                        }}
                      >
                        <IconButton style={{ width: "20%" }}>
                          <RemoveIcon
                            fontSize="small"
                            onClick={() => handleRemoveFromCart(product[0])}
                          />
                        </IconButton>

                        <p style={{ width: "20%", alignSelf: "center" }}>
                          {item.quantity}
                        </p>
                        <IconButton style={{ width: "20%" }}>
                          <AddIcon
                            onClick={() => handleAddToCart(product[0])}
                          />
                        </IconButton>
                      </TableCell>
                      <TableCell>
                        ${product[0].price * item.quantity}.00
                      </TableCell>
                      <TableCell>
                        <IconButton
                          onClick={() => {
                            fetch(`/api/product_instances/${item.id}`, {
                              method: "DELETE",
                            }).then((r) => {
                              if (r.ok) {
                                let updatedCart = cartItems.filter(
                                  (cartItem) => cartItem.id !== item.id
                                );
                                setCartItems(updatedCart);
                              }
                            });
                          }}
                          id={item.id}
                          value={item}
                          aria-label="delete"
                        >
                          <DeleteIcon sx={{ color: "red" }} />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  )}
                </>
              );
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
