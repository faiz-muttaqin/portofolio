import './About.css';

const About = () => {
  const skills = [
    'React',
    'TypeScript',
    'JavaScript',
    'Node.js',
    'HTML/CSS',
    'Git',
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate Full Stack Developer with a love for creating
              elegant solutions to complex problems. With experience in modern
              web technologies, I specialize in building scalable and
              performant web applications.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies,
              contributing to open source projects, or sharing my knowledge
              with the developer community.
            </p>
          </div>
          <div className="skills">
            <h3>Skills & Technologies</h3>
            <div className="skills-grid">
              {skills.map((skill) => (
                <div key={skill} className="skill-tag">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
