import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Liên hệ</h3>
          <p>Email: phongdiepbao080102@gmail.com</p>
        </div>
        <div className="footer-section">
          <h3>Theo dõi chúng tôi</h3>
          <div className="social-links">
            {/* Thêm các icon mạng xã hội ở đây */}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Habitfy. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;