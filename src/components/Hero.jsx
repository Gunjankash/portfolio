import './Hero.css';
import { useEffect, useRef, useState } from 'react'; // ← Add useState here

import { Typewriter } from 'react-simple-typewriter';
import { FaEnvelope, FaPhoneAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import gsap from 'gsap';

function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      heroRef.current,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }
    );
  }, []);

  const [showGithubPreview, setShowGithubPreview] = useState(false);
const [showLinkedInPreview, setShowLinkedInPreview] = useState(false); // ← ADD THIS LINE



  return (
    <section className="hero-section" id="hero" ref={heroRef}>
      <div className="hero-content">
        <img src="photo.jpg" alt="Gunjan Kashyap" className="hero-photo" />

        <h1 className="hero-title">
          Hi,I’m <span className="highlighted-name">Gunjan Kashyap</span>
        </h1>

        <h2 className="typewriter-role">
          <Typewriter
            words={['Cybersecurity Enthusiast', 'React Fanatic', 'Full-Stack Coder']}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h2>

        <p className="hero-subtitle">✨ Let’s build something magical ✨</p>

        <a  href="/Gunjan Kashyap Resume.pdf" className="hero-btn" download>
          📄 Download Resume
        </a>
         <div className="hero-contact">
           <p><FaEnvelope className="hero-icon" /> <a href="mailto:kashyapgunjan023@gmail.com">kashyapgunjan023@gmail.com</a></p>
           <p><FaPhoneAlt className="hero-icon" /> <a href="tel:+919101663056">+91-9101663056</a></p>
           <p>
  <FaGithub className="hero-icon" />
  <div
  className="social-link"
  onMouseEnter={() => setShowGithubPreview(true)}
  onMouseLeave={() => setShowGithubPreview(false)}
>
  <a
    href="https://github.com/Gunjankash"
    target="_blank"
    rel="noreferrer"
  >GitHub
  </a>

  {showGithubPreview && (
    <div className="hover-preview">
      <img
        src="https://github.com/Gunjankash.png"
        alt="GitHub avatar"
      />
      <strong>Gunjan Kashyap</strong>
      <p>🔧5 Repos</p>
      <p>Let's collaborate into something awesome!</p>
    </div>
  )}
</div>

  {' | '}
  {/* LinkedIn */}
            <div
              className="social-link"
              onMouseEnter={() => setShowLinkedInPreview(true)}
              onMouseLeave={() => setShowLinkedInPreview(false)}
              style={{ display: 'inline-block', position: 'relative' }}
            >
              <FaLinkedin className="hero-icon" />
              <a
                href="https://www.linkedin.com/in/gunjan-kashyap-0a1895253"
                target="_blank"
                rel="noopener noreferrer"
              >
                 LinkedIn
              </a>

              {showLinkedInPreview && (
                <div className="hover-preview">
                  <img
                    src="Pic.jpeg"
                    alt="LinkedIn avatar"
                  />
                  <strong>Gunjan Kashyap</strong>
                  <p>🌐Ex-Intern @CFSL Kamrup @EduFabrica|Btech-Mtech CSE(Cyber Security)</p>
                </div>
              )}
            </div>
  </p>

         </div>

      </div>
    </section>
  );
}

export default Hero;
