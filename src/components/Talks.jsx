import './Talks.css';
import { Typewriter } from 'react-simple-typewriter';

function Talks() {
  const talks = [
    {
      title: "Neurofeedback as A Tool To Break Recidivism in Indian Correctional Institutions",
      event: "5th International and 44th All India Criminology Conference",
      venue: "National Forensic Sciences University, Gandhinagar",
      role: "Research Paper Presentation",
      date: "January 23-25, 2024",
      image: "conf1.jpg", 
       linkedin: "https://www.linkedin.com/posts/gunjan-kashyap-0a1895253_neurofeedback-technologythesedays-conference-activity-7158769693455970304-jHOc?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD6ZyzkBoaoWoc9pUEUOiVQEH3PcDwC2y5Y"
    },
    {
      title: "Evolving Legal Frameworks and Digital Evidence Admissibility in Cyber Space",
      event: "All India Forensic Science Summit",
      venue: "Vigyan Bhawan, New Delhi",
      role: "Abstract Presentation",
      date: "April 14-15, 2025",
      image: "conf2.jpg", 
       linkedin: "https://www.linkedin.com/posts/gunjan-kashyap-0a1895253_digitalevidence-cyberlaw-forensicscience-activity-7318667376340676608-i0Hi?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD6ZyzkBoaoWoc9pUEUOiVQEH3PcDwC2y5Y"
    },
    // Add more talks similarly
  ];

  return (
    <section className="talks-section" id="talks">
      <div className="container">
        <h2 className="talks-title">
          <Typewriter
            words={['Talks & Conferences']}
            loop={1}
            cursor
            cursorStyle="|"
            typeSpeed={150}
            deleteSpeed={0}
            delaySpeed={1000}
          />
        </h2>

        <div className="talks-grid">
          {talks.map((talk, index) => (
            <div className="talk-card" key={index}>
              <div className="card-inner">
                {/* Front */}
                <div className="card-front">
                  <h3>{talk.title}</h3>
                  <p><strong>📍 Event:</strong> {talk.event}</p>
                  <p><strong>🏛️ Venue:</strong> {talk.venue}</p>
                  <p><strong>🧠 Role:</strong> {talk.role}</p>
                  <p><strong>📅 Date:</strong> {talk.date}</p>
                </div>

                {/* Back */}
                <div className="card-back">
                  <img
                    src={`/conferences/${talk.image}`}
                    alt={`conf ${index + 1}`}
                  />
                  <a
                    href={talk.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="linkedin-link"
                  >
                    🔗 View LinkedIn Post
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Talks;
