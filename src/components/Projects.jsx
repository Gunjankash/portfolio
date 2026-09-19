import './Projects.css';
import { Typewriter } from 'react-simple-typewriter';

function Projects() {
  return (
    <section className="projects-section" id="projects">
         <div className="container">
      <h2 className="about-title">
                <Typewriter
                  words={['Projects']}
                  loop={1}
                  cursor
                  cursorStyle="|"
                  typeSpeed={150}
                  deleteSpeed={0}
                  delaySpeed={1000}
                />
              </h2>
      <div className="projects-grid">

        <div className="project-card">
          <h3>HRMS Web App</h3>
          <p>A Laravel-based HR management system with login, roles, leave tracking, and reporting modules.</p>
          <span>Laravel, MySQL, AdminLTE</span>
          <a href="#" target="_blank"></a>
        </div>

        <div className="project-card">
          <h3>3D Car Shooting Game</h3>
          <p>A browser-based game built using Three.js with bots, bullets, health system, and score tracking.</p>
          <span>Three.js, JavaScript, WebGL</span>
          <a href="#" target="_blank"></a>
        </div>

        <div className="project-card">
          <h3>Portfolio Website</h3>
          <p>This personal portfolio you're viewing, built in React with custom CSS and responsive design.</p>
          <span>React, CSS, Vite</span>
          <a href="#" target="_blank"></a>
        </div>

      </div>
      </div>
    </section>
  );
}

export default Projects;
