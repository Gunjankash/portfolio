import './Contact.css';
import { Typewriter } from 'react-simple-typewriter';
import { useEffect, useRef, useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaGithub, FaLinkedin } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message submitted!');
    setFormData({ name: '', email: '', message: '' });
  };

  const [showGithubPreview, setShowGithubPreview] = useState(false);
  const [showLinkedInPreview, setShowLinkedInPreview] = useState(false); 

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <h2 className="about-title">
          <Typewriter
            words={['Get in Touch']}
            loop={1}
            cursor
            cursorStyle="|"
            typeSpeed={150}
            deleteSpeed={0}
            delaySpeed={1000}
          />
        </h2>

        <p className="contact-subtext">
          Feel free to reach out to me via email, phone, or through my social links below.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
        <div className="contact-details">
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
  >
    GitHub
  </a>

  {showGithubPreview && (
    <div className="hover-preview">
      <img
        src="https://github.com/Gunjankash.png"
        alt="GitHub avatar"
      />
      <p><strong>Gunjan Kashyap</strong></p>
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
                  <p><strong>Gunjan Kashyap</strong></p>
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

export default Contact;
