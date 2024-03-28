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
  { name: "Html", image: HtmlImage },
  { name: "Css", image: CssImage },
  { name: "TailwindCss", image: Tailwindcss },
  { name: "MongoDb", image: MongoDb },
  { name: "React", image: ReactImage },
  { name: "Node & Express.js", image: NodeImage },
  { name: "BootStrap", image: BootsrapImage },
  { name: "Django", image: DjangoImage },
];

export default function TechStack() {
  return (
    <>
      <div className="DisplayFlex TechSec">
        <div className="Skills DisplayFlex">
          <h1>Skills </h1>
          <span>
            Here are My Some Skills I Have Been Worked On Since My Past 1 Year
          </span>
        </div>
        <div className="tech-stack-container">
          {techStackItems &&
            techStackItems.map((item, index) => (
              <div className="tech-stack-item" key={index}>
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
