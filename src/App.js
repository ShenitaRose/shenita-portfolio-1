import logo from "./logo.svg";
import "./App.css";
import Landing from "./Landing";
import Home from "./Home";
import About from "./About";
import Resume from "./Resume";
import Work from "./Work";
import { useEffect } from "react";
import ContactForm from "./ContactForm";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  useEffect(() => {
    if (document) {
      const stylesheet = document.createElement("link");

      stylesheet.rel = "stylesheet";

      stylesheet.href =
        "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css";

      document.head.appendChild(stylesheet);
    }
  }, []);
  function navigateHome() {
    window.location.href = "/home";
  }

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/contactform" element={<ContactForm />} />
      <Route path="/work" element={<Work />} />
    </Routes>
  );
}

export default App;
