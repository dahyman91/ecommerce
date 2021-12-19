import "./Pages/Signup";
import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import LogIn from "./Pages/Login";
import SignUp from "./Pages/Signup";
import Product from "./Pages/Product";
import Products from "./Pages/Products";
import Navbar from "../src/Components/Navbar";
import "./App.css";

function App() {
  const [url, setUrl] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/sign-up">
          <SignUp setUrl={setUrl} />
        </Route>
        <Route path="/log-in">
          <LogIn />
        </Route>
        <Route exact path="/products">
          <Products
            products={products}
            setProducts={setProducts}
            url={url}
            setUrl={setUrl}
          />
        </Route>
        <Route exact path="/products/:product">
          <Product setUrl={setUrl} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
