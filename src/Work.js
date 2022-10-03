import Navigation from "./Navigation";



function Work() {
    return (
      <div>
        <Navigation />
        <h1 className="form-heading">PROJECTS</h1>
        <div className="flex pl-10  pt-5">
          <a href="https://diction.netlify.app/" target="_blank">
            <img
              className="w-5/6 border-4 border-emerald-800 scale-100 "
              src={require("./images/Dictionary App.png")}
            />
          </a>
          <p className=" pr-6 flex-initial w-full lg:w-1/2 m-12">
            This Project was one of the few projects I completed whilst enrolled 
            at SheCodes.Diction is a dictionary application that works just like
            any ordinary dictionary.
            <p>
            <b>Tools Used:</b>
          </p>
          <ul>
            <li>React</li>
            <li>Dictionary API</li>
            <li>HTML</li>
            <li>Javascript</li>
          </ul>
          </p>
          
          <a href="https://sims-fan.netlify.app/" target="_blank">
            <img
              className="w-5/6 border-4 border-emerald-800 scale-100 "
              src={require("./images/simsationelle App.png")}
            />
          </a>
          <a href="https://sims-fan.netlify.app/" target="_blank">
            <img
              className="w-5/6 border-4 border-emerald-800 scale-120 "
              src={require("./images/MatchingSwag Logo.png")}
            />
          </a>

          <a href="https://final-weather-project.netlify.app/" target="_blank">
            <img
              className="w-5/6 border-4 border-emerald-800 scale-120 "
              src={require("./images/Weather.png")}
            />
          </a>
        </div>
      </div>
    );
}

export default Work;