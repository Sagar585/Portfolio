import React from "react";
import "./ContactMe.css";

const ContactData = [
  {
    name: "Instagram",
    icon: "fa-brands fa-instagram",
    link: "https://www.instagram.com/ssagar____?igsh=ZW5wOHJncnRhODF3",
  },
  {
    name: "Email",
    icon: "fa-regular fa-envelope",
    link: "mailto:sagar.nb@somaiya.edu",
  },
  {
    name: "LinkedIn",
    icon: " fa-brands fa-linkedin-in",
    link: "https://www.linkedin.com/in/sagarbhanushali586/",
  },
  {
    name: "Github",
    icon: "fa-brands fa-github",
    link: "https://github.com/Sagar585",
  },
  {
    name: "Phone",
    icon: "fa-solid fa-phone",
    link: "tel:7045049489" ,
  },
]; // Add your contact data here

function ContactMe() {
  return (
    <>
    <div className="ContactMeHead">
        <h1>Contact Me</h1>
    </div>
      <div className="ContactMe" id="ContactMe">
        {ContactData.map((contact, index) => (
          <div className="ContactCard" key={index}>
            <a className="ContactItems" target="_blank" rel="noreferrer"  href={contact.link}>
              <i className={contact.icon}></i>
            </a>
          </div>
        ))}
      </div>
    </>
  );
}

export default ContactMe;
