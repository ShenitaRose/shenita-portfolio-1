//==========IMPORTS=========
import Navigation from "./Navigation";
import "./Navigation.css";
import "./Resume.css";

function Resume() {
  function showResume() {
    window.location.href = "/resume.pdf";
  }
  return (
    <div>
      <Navigation />
      <div className="flex items-center justify-center pt-10">
        <img
          src="./images/Resume.jpg"
          alt="Shenita's Resume"
          className="w-5/6 border-4 border-emerald-600 "
        ></img>
      </div>
      <button type="button" className="link-button" onClick={showResume}>
        Download PDF
      </button>
    </div>
  );
}

export default Resume;
