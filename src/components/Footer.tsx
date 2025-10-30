import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p>© {currentYear} Faiz Muttaqin. All rights reserved.</p>
        <p className="footer-subtitle">
          Built with React, TypeScript, and Vite
        </p>
      </div>
    </footer>
  );
};

export default Footer;
