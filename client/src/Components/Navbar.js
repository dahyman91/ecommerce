import * as React from "react";
import { useHistory } from "react-router-dom";
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
import { styled, alpha } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(2),
    width: "auto",
  },
}));

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

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export default function Navbar({
  currentUser,
  setCurrentUser,
  cartItems,
  products,
}) {
  let showNav = currentUser ? "block" : "hidden";
  function getProductDetails(id) {
    let product = products.filter((product) => id === product.id);
    return product;
  }
  let history = useHistory();
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

  const cartDisplay = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {cartItems.length ? (
        cartItems.map((item) => {
          let product = getProductDetails(item.product_id);

          return (
            <p key={product[0].id}>
              {product[0].name} {product[0].price}
            </p>
          );
        })
      ) : (
        <h1>nothing in cart</h1>
      )}
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
        <ListItem button key="Checkout">
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
        <ListItem
          button
          onClick={handlelogout}
          // component={Link}
          // to="/sign-up"
          key="Sign Up"
        >
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
          <Typography>{`Dan's Store: A Place to Buy Things`}</Typography>
          <Search style={{ position: "absolute", right: "100px" }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            style={{ position: "absolute", right: "20px" }}
          >
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
