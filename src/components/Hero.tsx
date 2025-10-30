import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Hi, I'm <span className="gradient-text">Faiz Muttaqin</span>
        </h1>
        <p className="hero-subtitle">
          Full Stack Developer | Building modern web applications
        </p>
        <p className="hero-description">
          I create beautiful, responsive, and user-friendly web experiences
          using modern technologies like React, TypeScript, and Node.js
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            View My Work
          </a>
          <a href="#contact" className="btn btn-secondary">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
