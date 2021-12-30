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
  const [selectedId, setSelectedId] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setCurrentUser(user));
      }
    });
  }, []);

  if (!currentUser) return <LogIn setCurrentUser={setCurrentUser} />;

  return (
    <div className="App">
      <Navbar setCurrentUser={setCurrentUser} currentUser={currentUser} />
      <Switch>
        <Route exact path="/">
          <Redirect to="/products" currentUser={currentUser} />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route path="/sign-up">
          <SignUp currentUser={currentUser} setCurrentUser={setCurrentUser} />
        </Route>
        <Route path="/log-in">
          <LogIn currentUser={currentUser} setCurrentUser={setCurrentUser} />
        </Route>
        <Route exact path="/products">
          <Products products={products} currentUser={currentUser} />
        </Route>
        <Route exact currentUser={currentUser} path="/products/:product">
          <Product />
        </Route>
        <Route exact path="/cart">
          <Cart products={products} currentUser={currentUser} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
