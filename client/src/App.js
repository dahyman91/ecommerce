import "./Pages/Signup";
import { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import LogIn from "./Pages/Login";
import SignUp from "./Pages/Signup";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Products from "./Pages/Products";
import Navbar from "../src/Components/Navbar";
import Cart from "./Pages/Cart";

import "./App.css";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  let [cartTotal, setCartTotal] = useState(0);

  function getProductDetails(id) {
    let product = products.filter((product) => id === product.id);
    return product;
  }

  useEffect(() => {
    if (currentUser) {
      fetch("/api/products")
        .then((res) => res.json())
        .then((data) => {
          setProducts(data);
        });
    }
  }, [currentUser]);

  useEffect(() => {
    if (currentUser && products) {
      fetch("/api/me").then((r) => {
        if (r.ok) {
          r.json().then((user) => setCartItems(user.product_instances));
        }
      });
    }
  }, []);

  useEffect(() => {
    // auto-login
    fetch("/api/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setCurrentUser(user);
        });
      }
    });
  }, []);

  // Get Cart Total
  useEffect(() => {
    let productArr = [];
    let total;
    cartItems.map((item) => {
      let product = getProductDetails(item.product_id);
      productArr.push(product[0]?.price * item.quantity);
      return (total = productArr.reduce(
        (item, cartTotal) => item + cartTotal,
        0
      ));
    });
    setCartTotal(total);
  }, [cartItems, getProductDetails]);

  function updateCart(instance) {
    let action;
    cartItems.map((cartItems) => {
      if (cartItems.product_id === instance.product_id) {
        return (action = "fetch");
      }
    });
    if (action === "fetch") {
      fetch("/api/me").then((r) => {
        if (r.ok) {
          r.json().then((user) => setCartItems(user.product_instances));
        }
      });
    } else {
      setCartItems([...cartItems, instance]);
    }
  }

  function handleDelete(id) {
    setCartItems(cartItems.filter((item) => item !== id));
  }

  if (!currentUser)
    return (
      <Switch>
        <Route exact path="/">
          <Redirect
            to="/log-in"
            setProducts={setProducts}
            products={products}
            currentUser={currentUser}
          />
        </Route>
        <Route exact path="/sign-up">
          <SignUp currentUser={currentUser} setCurrentUser={setCurrentUser} />
        </Route>
        <Route path="/log-in">
          <LogIn currentUser={currentUser} setCurrentUser={setCurrentUser} />
        </Route>
      </Switch>
    );

  if (currentUser)
    return (
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Navbar
              setCurrentUser={setCurrentUser}
              cartItems={cartItems}
              currentUser={currentUser}
              setCartItems={setCartItems}
              products={products}
              cartTotal={cartTotal}
            />
            <Redirect
              to="/products"
              setProducts={setProducts}
              products={products}
              currentUser={currentUser}
            />
          </Route>
          <Route exact path="/home">
            <Navbar
              setCurrentUser={setCurrentUser}
              cartItems={cartItems}
              currentUser={currentUser}
              setCartItems={setCartItems}
              products={products}
              cartTotal={cartTotal}
            />
            <Home />
          </Route>
          <Route exact path="/sign-up">
            <SignUp
              currentUser={currentUser}
              cartItems={cartItems}
              setCurrentUser={setCurrentUser}
              setCartItems={setCartItems}
            />
          </Route>
          <Route path="/log-in">
            <LogIn
              currentUser={currentUser}
              cartItems={cartItems}
              setCurrentUser={setCurrentUser}
            />
          </Route>
          <Route exact path="/products">
            <Navbar
              setCurrentUser={setCurrentUser}
              cartItems={cartItems}
              currentUser={currentUser}
              setCartItems={setCartItems}
              products={products}
              cartTotal={cartTotal}
            />
            <Products
              products={products}
              currentUser={currentUser}
              setProducts={setProducts}
              cartItems={cartItems}
              setCartItems={setCartItems}
              updateCart={updateCart}
            />
          </Route>
          <Route exact path="/products/:product">
            <Navbar
              setCurrentUser={setCurrentUser}
              cartItems={cartItems}
              currentUser={currentUser}
              setCartItems={setCartItems}
              products={products}
              updateCart={updateCart}
              cartTotal={cartTotal}
            />
            <Product
              currentUser={currentUser}
              updateCart={updateCart}
              setProducts={setProducts}
              products={products}
              setCartItems={setCartItems}
            />
          </Route>
          <Route exact path="/cart">
            <Navbar
              setCurrentUser={setCurrentUser}
              cartItems={cartItems}
              currentUser={currentUser}
              setCartItems={setCartItems}
              products={products}
              cartTotal={cartTotal}
            />
            <Cart
              products={products}
              cartItems={cartItems}
              setCartItems={setCartItems}
              currentUser={currentUser}
              cartTotal={cartTotal}
              handleDelete={handleDelete}
              updateCart={updateCart}
            />
          </Route>
        </Switch>
      </div>
    );
}

//Higher order components
// Remove Conditionals
//
export default App;
