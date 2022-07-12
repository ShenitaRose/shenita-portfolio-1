//IMPORTS
import "./Navigation.css";

function Navigation() {
  function contactForm() {
    window.location.href = "/contactform";
  }
  return (
    <header className="pt-6">
      <h3>
        <a href="/home" className="text-3xl font-bold">
          Shenita Rose
        </a>
      </h3>
      <nav className="hidden lg:block ">
        <ul class="nav_links">
          <li>
            <a href="/resume">Resume</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/work">Work</a>
          </li>
        </ul>
      </nav>
      <div className="block lg:hidden">
        <button class="bg-emerald-600 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded-full">
          Menu
        </button>
      </div>
      <a className="cta hidden lg:block" href="#">
        <button
          onClick={contactForm}
          class="bg-emerald-600 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded-full"
        >
          Contact
        </button>
      </a>
    </header>
  );
}

export default Navigation;
