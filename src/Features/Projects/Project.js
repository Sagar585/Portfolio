import React from "react";
import Cms from "../../assets/CMS.png";
import MW from "../../assets/MW.png";
import PF from "../../assets/PF.png";
import "./Project.css";

const projectData = [
  {
    name: "Canteen Management System",
    tech: "React, Node.js, Express, MongoDB",
    image: Cms ,
    description:
      "A web app  lication that allows users to order food from the canteen online. It also allows the canteen staff to manage orders and update the menu.",
  },
  {
    name: "PlanetFitness",
    tech: "React, Node.js, Express, RestApi , Material UI",
    image: PF ,
    description:
      "Enhance your fitness journey with PlanetFitness: intuitive interfaces, personalized features, and sleek design for optimal health and wellness results. Plan workouts, track progress, and gain nutrition insights with ease.",
  },
  {
    name: "Mind Web ",
    tech: "Html, Css,JavaScript, Django, Sqlite3",
    image: MW ,
    description:
      "Spark curiosity with Mind Web: interactive lessons, creative challenges, and engaging interfaces make learning a joyful adventure for young minds. Join us to inspire a love for education in children.",
  },
]; // Add your project data here

function Project() {
  return (
    <>
    <div className="Projects" id="Projects">
    <h1 >Projects</h1>
    </div>
    <div className="ProContainer">
      {projectData.map((project) => (
        <div className="project-card">
          <div className="project-img">
            <img src={project.image} alt ={project.name} />
          </div>
          <div>
            <h2>{project.name}</h2>
            <p>{project.tech}</p>
            <p>{project.description}</p>
          </div>
        </div>
      ))}
    </div>
      </>
  );
}

export default Project;
