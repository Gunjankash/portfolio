import './Skills.css';
import { Typewriter } from 'react-simple-typewriter';

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <h2 className="about-title">
                <Typewriter
                  words={['My Skills']}
                  loop={1}
                  cursor
                  cursorStyle="|"
                  typeSpeed={150}
                  deleteSpeed={0}
                  delaySpeed={1000}
                />
              </h2>
      <div className="skills-container">

        <div className="skill-group">
          <h3>Frontend</h3>
          <div className="skill-badges">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React</span>
          </div>
        </div>

        <div className="skill-group">
          <h3>Backend</h3>
          <div className="skill-badges">
            <span>Laravel</span>
            <span>PHP</span>
            <span>Node.js</span>
          </div>
        </div>

        <div className="skill-group">
          <h3>Databases</h3>
          <div className="skill-badges">
            <span>MySQL</span>
            <span>MongoDB</span>
          </div>
        </div>

        <div className="skill-group">
          <h3>Tools</h3>
          <div className="skill-badges">
            <span>Git</span>
            <span>VS Code</span>
            <span>Postman</span>
            <span>Linux</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;
