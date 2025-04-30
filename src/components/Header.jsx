import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="/img/logo.png" alt="Habitfy Logo" />
        <span>Habitfy</span>
      </div>
      <nav className="nav-links">
        <a href="#features">Tính năng</a>
        <a href="#benefits">Lợi ích</a>
        <a href="#download">Tải ứng dụng</a>
      </nav>
    </header>
  );
};

export default Header;