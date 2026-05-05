import './Footer.css';
import { ExternalLink, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="logo">
              am<span>.plify</span>
            </div>
            <p>Messaging Consulting</p>
          </div>
          <div className="footer-cta">
            <h2>Ready to amplify your messaging strategy?</h2>
            <a href="mailto:anton@example.com" className="btn btn-primary">Get In Touch</a>
          </div>
          <div className="footer-links">
            <a href="https://www.linkedin.com/in/anton-morozov-433895b2/" target="_blank" rel="noopener noreferrer">
              <ExternalLink size={24} />
            </a>
            <a href="mailto:anton@example.com">
              <Mail size={24} />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} am.plify messaging consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
