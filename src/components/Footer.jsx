import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <img src="/aatma-labs-light.svg" alt="Aatma Labs" className="footer-logo" />
          <p className="footer-tagline">An Aatma Labs Product</p>
        </div>
        
        <div className="footer-links">
          <a href="mailto:info@aatmalabs.com">info@aatmalabs.com</a>
          <span className="divider">|</span>
          <a href="#privacy">Privacy Policy</a>
          <span className="divider">|</span>
          <a href="#terms">Terms</a>
          <span className="divider">|</span>
          <a href="mailto:info@aatmalabs.com">Contact</a>
        </div>

        <div className="footer-copyright">
          <p>© {currentYear} Aatma Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
