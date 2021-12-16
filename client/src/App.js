import "./Pages/signup";
import { Routes, Route } from "react-router-dom";
import LogIn from "./Pages/login";
import SignUp from "./Pages/signup";
import Home from "./Pages/home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/log-in" element={<LogIn />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
