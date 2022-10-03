import logo from "./logo.svg";
import "./App.css";


function Landing() {
  function navigateHome() {
    window.location.href = "/home";
  }

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className="App-logo cursor-pointer"
          alt="logo"
          onClick={navigateHome}
        />
      </header>
    </div>
  );
}

export default Landing;
