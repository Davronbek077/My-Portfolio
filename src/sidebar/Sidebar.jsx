import React from 'react';
import './Sidebar.css';

export const Sidebar = ({ isOpen, closeSidebar }) => {
  const handleLinkClick = () => {
    closeSidebar();
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <span className="close-btn" onClick={closeSidebar}><i className='bxr  bx-x'></i> </span>
      </div>
      <ul>
        <li><a href="/" onClick={handleLinkClick}>Home</a></li>
        <li><a href="#about" onClick={handleLinkClick}>About</a></li>
        <li><a href="#project" onClick={handleLinkClick}>Project</a></li>
        <li><a href="#services" onClick={handleLinkClick}>Services</a></li>
        <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
      </ul>
    </div>
  );
};
