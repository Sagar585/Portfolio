import React from 'react'
import Navbar from '../Features/Navbar/Navbar'
import Hero from '../Features/Hero/Hero.js'
import TechStack from '../Features/TechStack/TechStack.js'
import './Home.css'

export default function Home() {
  return (
    <div>
        <div className="navbar">
            <Navbar />
            <Hero />
            <TechStack/>
        </div>

    </div>
  )
}
