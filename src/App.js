import logo from "./logo.svg";
import "./App.css";
import Landing from "./Landing";
import Home from "./Home";
import About from "./About";
import Resume from "./Resume";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  function navigateHome() {
    window.location.href = "/home";
  }

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
  );
}

export default App;
