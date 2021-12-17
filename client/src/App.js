import "./Pages/signup";
import { Routes, Route } from "react-router-dom";
import LogIn from "./Pages/login";
import SignUp from "./Pages/signup";
import Home from "./Pages/home";
import Products from "./Pages/products";
import Navbar from "../src/Components/Navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/log-in" element={<LogIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
