//IMPORTS
import Navigation from "./Navigation";
import "./Home.css";

function Home() {
  function showResume() {
    window.location.href = "/resume";
  }

  return (
    <div>
      <Navigation />
      <section className="hero">
        <div className="hero-content">
          <p className="hero-subtitle">Hi There! I'm</p>
          <h1 class="hero-title"> Shenita Rose</h1>
          <p className="hero-subtitle">
            A Front-End Developer passionate about creating interactive
            applications and experiences on the web
          </p>
          <button
            type="button"
            className="hero-button bg-emerald-800"
            onClick={showResume}
          >
            Resume
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;
