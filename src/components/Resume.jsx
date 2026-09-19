import './Resume.css';
import { Typewriter } from 'react-simple-typewriter';

function Resume() {
  return (
    <section className="resume-section" id="resume">
         <div className="container">
      <h2 className="about-title">
                <Typewriter
                  words={['My Resume']}
                  loop={1}
                  cursor
                  cursorStyle="|"
                  typeSpeed={150}
                  deleteSpeed={0}
                  delaySpeed={1000}
                />
              </h2>
      <p className="resume-text">Check out my Resume</p>
      <a
          href="/Gunjan Kashyap Resume.pdf"
          download
          className="hero-btn"
        >
          📄 Download Resume
        </a>
        </div>
    </section>
  );
}

export default Resume;
