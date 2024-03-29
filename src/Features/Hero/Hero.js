import React from 'react'
import './Hero.css'
import ProfilePicNew from '../../assets/ProfilePic.png'
import Resume from '../../assets/Sagar_Resume.pdf'

export default function Hero() {
  return (
            <div className='HeroContainer'>
          <div className='Hero' id="Home">
            <div className="intro">
                <h1>Hi, I'm <span className="name">Sagar Bhanushali</span></h1>
                <p>Full Stack Developer</p>
                <p>Specializing in building web applications</p>
                <div className="ViewWork">
                    <a href="#Projects" className='type1'>View Projects</a>
                    <a href={Resume} className='type1'>Resume</a>
                </div>
            </div>
            <div className="ProfilePic">
              <img src= {ProfilePicNew} className='pro' alt="" />
            </div>
            </div>
        </div>
  )
} 