import React, { useState } from 'react';
import './navbar.css';
import { Sidebar } from '../../sidebar/Sidebar';

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <>
      <div className='navbar'>
        <div className="container-navbar">
          <div className="navbar-container">
            <div className="navbar-logo">
              <h2>Davronbek</h2>
            </div>

            <nav className='desktop-nav'>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#project">Project</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </nav>

            <div className="menu-icon" onClick={toggleSidebar}>
              ☰
            </div>
          </div>
        </div>
      </div>

      <Sidebar isOpen={sidebarOpen} closeSidebar={closeSidebar} />
    </>
  );
};

export default Navbar;
