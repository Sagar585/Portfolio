  import React from 'react'
  import './Hero.css'
  import ProfilePic from '../../assets/sagarPro.png'
  import BackgroundPro from '../../assets/Backgroundprofile.png'  
  export default function Hero() {
    return (
            <div className='Hero' id="Home">
              <div className="intro">
                  <h1>Hi, I'm <span className="name">Sagar Bhanushali</span></h1>
                  <p>Full Stack Developer</p>
                  <p>Specializing in building web applications</p>
                  <div className="ViewWork">
                      <a href="#Projects" className='type1'>View Projects</a>
                      <a href="#ContactMe" className='type1'>Contact Me</a>
                  </div>
              </div>
              <div className="ProfilePic">
                <img src= {BackgroundPro}  className='Bgpro' alt="" />
                <img src= {ProfilePic} className='pro' alt="" />
              </div>
          </div>
    )
  } 