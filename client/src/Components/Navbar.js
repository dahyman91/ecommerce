import * as React from "react";
import { useHistory } from "react-router-dom";
import ComboBox from "./ComboBox";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LogoutIcon from "@mui/icons-material/Logout";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";
import CartTable from "./CartTable";
import { Button } from "@mui/material";
import CreateCharge from "./CreateCharge";

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.substr(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

export default function Navbar({
  currentUser,
  setCurrentUser,
  cartItems,
  products,
  cartTotal,
  setCartItems,
  updateCart,
}) {
  let showNav = currentUser ? "block" : "hidden";
  function getProductDetails(id) {
    let product = products && products.filter((product) => id === product.id);
    return product;
  }
  let history = useHistory();
  let testButton = <Button variant="outlined">Checkout</Button>;
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };
  function handlelogout() {
    fetch("/api/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setCurrentUser(null);
        history.push("/log-in");
      }
    });
  }

  function handlelogoutCreateAccount() {
    fetch("/api/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setCurrentUser(null);
        history.push("/sign-up");
      }
    });
  }

  const cartDisplay = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 700 }}
      role="presentation"
    >
      <Typography
        textAlign="center"
        style={{ fontSize: "20px", padding: "10px" }}
      >
        {cartTotal
          ? `${currentUser.first_name}'s Cart: Total $${cartTotal}`
          : `${currentUser.first_name}'s Cart: Empty`}
      </Typography>
      <CartTable
        cartItems={cartItems}
        setCartItems={setCartItems}
        products={products}
        getProductDetails={getProductDetails}
        updateCart={updateCart}
        currentUser={currentUser}
        style={{
          maxWidth: "100%",
          position: "absolute",
          top: "0px",
          left: "0px",
        }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "20px",
        }}
      >
        <CreateCharge testButton={testButton} amount={cartTotal * 100} />

        <Button variant="outlined" onClick={() => history.push("/cart")}>
          Open Cart
        </Button>
      </div>
    </Box>
  );

  const menu = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button component={Link} to="/products">
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Products" />
        </ListItem>
        <ListItem button component={Link} to="/cart">
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary="Cart" />
        </ListItem>
        <ListItem button component={Link} to="/checkout" key="Checkout">
          <ListItemIcon>
            <PointOfSaleIcon />
          </ListItemIcon>
          <ListItemText primary="Checkout" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button onClick={handlelogout} key="Sign Out">
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Sign Out" />
        </ListItem>
        <ListItem button onClick={handlelogoutCreateAccount} key="Sign Up">
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Create Account" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        style={{
          width: "100vw",
          zIndex: "10",
          display: { showNav },
        }}
      >
        <Toolbar>
          <Avatar
            {...stringAvatar(
              `${currentUser.first_name} ${currentUser.last_name}`
            )}
          />
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            style={{ padding: "20px" }}
            // onClick={toggleDrawer("left", true)}
          >
            <>
              <MenuIcon
                variant="outlined"
                style={{ left: "5vw", top: "0px" }}
                onClick={toggleDrawer("left", true)}
              ></MenuIcon>
              <Drawer
                anchor={"left"}
                open={state["left"]}
                onClose={toggleDrawer("left", false)}
              >
                {menu("left")}
              </Drawer>
            </>
          </IconButton>
          <Typography>Dan's Store: A Place to Buy Things</Typography>
          <ComboBox
            products={products}
            className="combo-box"
            style={{ display: "none" }}
          />
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            style={{ position: "absolute", right: "20px" }}
          >
            {cartTotal ? `$${cartTotal}` : ""}
            <ShoppingCartIcon
              onClick={toggleDrawer("right", true)}
            ></ShoppingCartIcon>

            <Drawer
              anchor={"right"}
              open={state["right"]}
              onClose={toggleDrawer("right", false)}
            >
              {cartDisplay("right")}
            </Drawer>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
