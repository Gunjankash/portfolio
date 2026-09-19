// components/Experience.jsx
import './Experience.css';

function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="container">
        <h2 className="experience-title">Experience</h2>
        
        <div className="experience-grid">
          <div className="experience-card">
            <h3>Intern - CFSL Kamrup</h3>
            <span>June 2023 – July 2023</span>
            <p>
              Explored digital forensics tools and assisted in mock cybercrime investigations.
              Gained hands-on exposure to evidence handling and cyber law procedures.
            </p>
          </div>

          <div className="experience-card">
            <h3>Intern - Edufabrica</h3>
            <span>Aug 2023 – Sept 2023</span>
            <p>
              Contributed to front-end development using HTML, CSS, JS & React. 
              Created educational modules and collaborated using Git version control.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
