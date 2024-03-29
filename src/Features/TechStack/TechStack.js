import React from "react";
import "./TechStack.css";
import ReactImage from "../../assets/react.png";
import NodeImage from "../../assets/nodejsExpress.png";
import CssImage from "../../assets/css-3.png";
import HtmlImage from "../../assets/html-5.png";
import BootsrapImage from "../../assets/Bootstrap.png";
import MongoDb from "../../assets/MongoDb.png";
import Tailwindcss from "../../assets/Tailwindcss.png";
import DjangoImage from "../../assets/Django.png";

const techStackItems = [
  { name: "Html", image: HtmlImage, typeof: "Frontend" },
  { name: "Css", image: CssImage, typeof: "Frontend" },
  { name: "TailwindCss", image: Tailwindcss, typeof: "Frontend" },
  { name: "MongoDb", image: MongoDb, typeof: "Backend" },
  { name: "React", image: ReactImage, typeof: "Frontend" },
  { name: "Node & Express.js", image: NodeImage, typeof: "Backend" },
  { name: "BootStrap", image: BootsrapImage, typeof: "Frontend" },
  { name: "Django", image: DjangoImage, typeof: "Backend" },
];

export default function TechStack() {
  const frontendItems = techStackItems.filter(
    (item) => item.typeof === "Frontend"
  );
  const backendItems = techStackItems.filter(
    (item) => item.typeof === "Backend"
  );

  return (
    <>
      <div className="DisplayFlex TechSec" id="skills">
        <div className="Skills DisplayFlex">
          <h1>Skills</h1>
        </div>
        <div className="TechCardContainer">

        <div className="tech-stack-container">
          <div className="cards">
            <h2 className="Subheading">FrontEnd</h2>
            <div className="TechContainer">
              {frontendItems.map((item, index) => (
                <div className="tech-stack-item" key={index}>
                  <img src={item.image} alt={item.name} />
                  <p>{item.name}</p>
                </div>
              ))}
            </div>
            </div>
            <div className="cards">
              <h2 className="Subheading">Backend</h2>
              <div className="TechContainer">
                {backendItems.map((item, index) => (
                  <div className="tech-stack-item" key={index}>
                    <img src={item.image} alt={item.name} />
                    <p>{item.name}</p>
                  </div>
                ))}
              </div>
          </div>
        </div>
      </div>
                </div>
    </>
  );
}
