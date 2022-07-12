//==========IMPORTS=========
import Navigation from "./Navigation";
import "./Navigation.css";
import "./Resume.css";

function Resume() {
     function showResume() {
       window.location.href = "/resume";
     }
  return (
    <div>
      <Navigation />
      <img src="./images/Resume.jpg" alt="Shenita's Resume"></img>
      <button type="button" className="link-button" onClick={showResume}>
    Download PDF
      </button>
    </div>
  );
}

export default Resume;
