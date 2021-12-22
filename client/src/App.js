import "./Pages/Signup";
import { Switch, Route } from "react-router-dom";
import LogIn from "./Pages/Login";
import SignUp from "./Pages/Signup";
import Product from "./Pages/Product";
import Products from "./Pages/Products";
import Navbar from "../src/Components/Navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/sign-up">
          <SignUp />
        </Route>
        <Route path="/log-in">
          <LogIn />
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
