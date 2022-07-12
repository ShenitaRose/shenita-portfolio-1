//IMPORTS
import "./Navigation.css";

function Navigation() {
  return (
    <header>
      <h3>Shenita Rose</h3>
      <nav>
        <ul class="nav_links">
          <li>
            <a href="#">Resume</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="#">Work</a>
          </li>
        </ul>
      </nav>
      <a className="cta" href="#">
        <button>Contact</button>
      </a>
    </header>
  );
}

export default Navigation;
