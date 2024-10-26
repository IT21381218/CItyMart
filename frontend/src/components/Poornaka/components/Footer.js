import React from 'react';
import './styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-column">
            <h4 className="footer-title">About Us</h4>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">About CItyMart</a></li>
              <li><a href="#" className="footer-link">Privacy Policy</a></li>
              <li><a href="/admin" className="footer-link">Staff</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4 className="footer-title">Customer Service</h4>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">Help Center</a></li>
              <li><a href="/contact" className="footer-link">Contact Us</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4 className="footer-title">Follow Us</h4>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">Facebook</a></li>
              <li><a href="#" className="footer-link">Twitter</a></li>
              <li><a href="#" className="footer-link">Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
