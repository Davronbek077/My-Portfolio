import React from 'react'
import "./navbar.css"

const navbar = () => {
  return (
    <div className='navbar'>
      <div className="container-navbar">
      <div className="navbar-container">
      <div className="navbar-logo">
              <h2>Davronbek</h2>
            </div>

          <nav>
           <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#project">Project</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
           </ul>
         </nav>
      </div>
      </div>
    </div>
  )
}

export default navbar;
