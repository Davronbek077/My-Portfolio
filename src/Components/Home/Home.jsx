import React from 'react'
import homePhoto from '../../assets/photo.png'
import olchaPhoto from '../../assets/olcha.png'
import myticketPhoto from '../../assets/myticket.png'
import frontendPhoto from '../../assets/frontend.jpg'
import backendPhoto from '../../assets/backend.webp'
import "./Home.css"

const Home = () => {
  return (
    <div className='home'>
      <div className="container">
        <div className="home-wrapper">
            <div className="text-wrap">
                <div className="home-name">
                    <p>Hello, i'm Davronbek</p>
                </div>
                <div className="home-title">
                    <h2>Full-Stack Web Developer</h2>
                </div>
                <div className="home-description">
                  <p>I have created several modern web projects 
                    during my studies and internships. 
                    I am always ready to work on new technologies and innovative solutions.</p>
                </div>
                <div className="home-btn">
                    <a href="#about">About Me</a>
                </div>
            </div>

            <div className="photo-wrap">
                <img src={homePhoto} alt="" />
            </div>
        </div>
        
        <div className="home-container">
        <div id='hide' className="home-wrapper">
        <div className="photo-wrap">
                <img src={homePhoto} alt="" />
            </div>
            <div className="text-wrap">
                <div className="home-name">
                    <p>Hello, i'm Davronbek</p>
                </div>
                <div className="home-title">
                    <h2>Full-Stack Web Developer</h2>
                </div>
                <div className="home-description">
                  <p>I have created several modern web projects 
                    during my studies and internships. 
                    I am always ready to work on new technologies and innovative solutions.</p>
                </div>
                <div className="home-btn">
                    <a href="#about">About Me</a>
                </div>
            </div>
        </div>
        </div>

        <div id='about' className="about-wrapper">
          <div className="about-photo">
            <img src={homePhoto} alt="" />
          </div>

          <div className="about-text">
            <div className="about-title">
              <h3>About Me</h3>
            </div>

            <div className="about-description">
              <p>Hello! 
              My name is Davronbek. I am 20 years old. I am a full-stack web developer.
              I have created several modern web projects during my studies and internships. 
              I am always ready to work on new technologies and innovative solutions. 
              My goal is to create user-friendly and effective web applications. 
              I will be happy to help you implement your project!</p>
            </div>
            <div className="about-down-btn">
              <a href="">Download CV</a>
            </div>
          </div>
        </div>

        <div id='project' className="project-wrapper">
          <div className="project-title">
            <h2>My Projects</h2>
            <p>Take a look at some of my recent projects below.</p>
          </div>

          <div className="project-wrap">
            <div className="project">
              <div className="project-photo">
              <img src={olchaPhoto} alt="" />
              </div>

              <div className="project-text">
                <h3>OlchaUz - Frontend Project</h3>
                <p>This is a frontend project for the OlchaUz website. 
                  This project is one of the best projects I did during my studies.</p>
              </div>
              <div className="project-btn">
                <a href="https://olcha-uz-theta.vercel.app/" target='_blank'>Visit to project</a>
              </div>
            </div>

            <div className="project">
              <div className="project-photo">
              <img src={myticketPhoto} alt="" />
              </div>

              <div className="project-text">
                <h3>MyTicket - Backend Project</h3>
                <p>This is a backend project of the Myticket website. 
                  This project is one of the best and biggest I have ever done on the backend.</p>
              </div>
              <div className="project-btn">
                <a href="https://myticket-058j.onrender.com/api-docs/" target='_blank'>Visit to project</a>
              </div>
            </div>

          </div>

          <div id='services' className="services-wrap">
            <div className="services-title">
              <h2>My Services</h2>
              <p>Below are the services I offer to support your success.</p>
            </div>

            <div className="service-wrapper">
              <div className="service">
                <div className="service-photo">
                <img src={frontendPhoto} alt="" />
                </div>

                <div className="service-text">
                  <h3>Frontend</h3>
                  <p>I specialize in frontend development and create intuitive user interfaces. 
                    I build websites that work seamlessly on both mobile and desktop devices. 
                    My core technologies include HTML, CSS, JavaScript, and React.</p>
                </div>
              </div>

              <div className="service">
                <div className="service-photo">
                <img src={backendPhoto} alt="" />
                </div>

                <div className="service-text">
                  <h3>Backend</h3>
                  <p>Behind every great interface is a powerful engine — I build that engine. 
                    From custom APIs to efficient data handling, I design backend solutions 
                    that keep everything running smoothly. My toolkit includes Node.js, 
                    Express, and databases like PostgreSQL or MongoDB.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
