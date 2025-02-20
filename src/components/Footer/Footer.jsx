import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        {/* قسم المعلومات */}
        <div className="footer-info">
          <div className="footer-logo">
            <h2>MEDILAB</h2>
            <p>Providing quality services to customers worldwide.</p>
          </div>
          <div className="footer-contact">
            <h4>Contact Us</h4>
            <ul>
              <li><FontAwesomeIcon icon={faMapMarkerAlt} /> 123 Main Street, City, Country</li>
              <li><FontAwesomeIcon icon={faPhone} /> (002) 01062364985</li>
              <li><FontAwesomeIcon icon={faEnvelope} /> info@mycompany.com</li>
            </ul>
          </div>
        </div>

        {/* قسم الروابط السريعة */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* قسم النشرة الإخبارية */}
        <div className="footer-newsletter">
          <h4>Subscribe to our Newsletter</h4>
          <form>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      {/* قسم تواصل اجتماعي */}
      <div className="footer-social">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>

      {/* حقوق الملكية */}
      <div className="footer-bottom">

        <p>&copy; 2025 Ahmed fiesal. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
