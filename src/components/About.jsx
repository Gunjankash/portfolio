import './About.css';
import { Typewriter } from 'react-simple-typewriter';

function About() {
  return (
    <>
      <section className="about-section" id="about">
        <div className="container">
          <h2 className="about-title">
            <Typewriter
              words={['About Me']}
              loop={1}
              cursor
              cursorStyle="|"
              typeSpeed={150}
              deleteSpeed={0}
              delaySpeed={1000}
            />
          </h2>
          <p className="about-text">
            I'm a passionate Cybersecurity student currently pursuing an integrated B.Tech-M.Tech in Computer Science with a specialization in Cybersecurity. I have an inclination toward Front-end, Full-Stack Development and love crafting secure, user-friendly, and responsive web applications. My curiosity drives me to solve real-world challenges through technology, and I'm always eager to learn, explore, and innovate at the intersection of cybersecurity and development.
          </p>
        </div>
      </section>

      
    </>
  );
}

export default About;
