//==========IMPORTS=========
import Navigation from "./Navigation";
import "./About.css";

function About() {
  return (
    <>
      <Navigation />
      <h1 className="form-heading">ABOUT ME</h1>
      <div className="flex flex-wrap pl-6 justify-center">
        <img
          src="./images/about.jpg"
          alt="Shenita"
          className="w-full md:w-96 h-80 border-4 border-emerald-800 object-cover m-12"
        ></img>
        <p className="pl-6 pr-6 flex-initial w-full lg:w-1/2 m-12">
          Hello World! I'm Shenita Rose, a Front-End Web Developer based in
          London. From psychology classes at the University of Greenwich to
          witing code, I found the one thing that i am truly passionate
          about,Web Development.I love creating user friendly web pages that are
          not only eye-catching but easily accessible and user friendly. The
          increase of inclusivity and diversity in the industry through
          representation is one of the main reasons why I enjoy coding even
          more.I truly believe that mindfulness in the workplace is a key to
          success which is why outside of work I enjoy taking long walks and the
          occasional yoga(I only know 2 poses 😊 ).My other Hobbies include
          Gaming and Digital Art I am absolutely excited to make the leap and
          continue to refine my skills with the right company. If perseverance
          and Grit is what you are looking for, drop me a line in the contact
          section of this portfolio.{" "}
        </p>
      </div>
    </>
  );
}

export default About;
