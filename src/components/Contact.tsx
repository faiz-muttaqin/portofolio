import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <p className="contact-description">
            I'm always open to new opportunities and interesting projects.
            Whether you have a question or just want to say hi, feel free to
            reach out!
          </p>
          <div className="contact-links">
            <a
              href="mailto:faiz.muttaqin@example.com"
              className="contact-button"
            >
              📧 Email Me
            </a>
            <a
              href="https://github.com/faiz-muttaqin"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-button"
            >
              💻 GitHub
            </a>
            <a
              href="https://linkedin.com/in/faiz-muttaqin"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-button"
            >
              💼 LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
