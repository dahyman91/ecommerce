import "./Pages/Signup";
import { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import LogIn from "./Pages/Login";
import SignUp from "./Pages/Signup";
import Product from "./Pages/Product";
import Products from "./Pages/Products";
import Navbar from "../src/Components/Navbar";
import "./App.css";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    fetch("/auth").then((res) =>
      res.json().then((user) => setCurrentUser(user))
    );
  }, []);

  if (!currentUser) return <LogIn setCurrentUser={setCurrentUser} />;

  return (
    <div className="App">
      <Navbar setCurrentUser={setCurrentUser} currentUser={currentUser} />
      <Switch>
        <Route exact path="/">
          <Redirect to="/products" />
        </Route>
        <Route path="/sign-up">
          <SignUp setCurrentUser={setCurrentUser} />
        </Route>
        <Route path="/log-in">
          <LogIn setCurrentUser={setCurrentUser} />
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>
        <Route exact path="/products/:product">
          <Product />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
