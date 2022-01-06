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

export default function CartTable({
  cartItems,
  setCartItems,
  products,
  getProductDetails,
  handleDelete,
}) {
  return (
    <TableContainer
      style={{
        marginTop: "80px",
        maxWidth: 500,
        marginLeft: "10vw",
      }}
      component={Paper}
    >
      <Table sx={{ maxWidth: 500 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Remove</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cartItems.map((item) => {
            let product = getProductDetails(item.product_id);
            return (
              <>
                {product[0] && (
                  <TableRow>
                    <TableCell component="th" scope="row">
                      {product[0].name}
                    </TableCell>
                    <TableCell>{product[0].price}</TableCell>
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

                          console.log(cartItems);
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
