import React from 'react'
import Navbar from '../Features/Navbar/Navbar'
import Hero from '../Features/Hero/Hero.js'
import TechStack from '../Features/TechStack/TechStack.js'
import Project from '../Features/Projects/Project.js'
import ContactMe from '../Features/ContactMe/ContactMe.js'
import './Home.css'

export default function Home() {
  return (
    <div>
        <div className="navbar">
            <Navbar />
            <Hero />
            <TechStack/>
            <Project/>
            <ContactMe />
        </div>
    </div>
  )
}
