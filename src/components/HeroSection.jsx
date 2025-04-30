import React from 'react';
import '../styles/HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Xây dựng thói quen tốt, kiến tạo cuộc sống thành công</h1>
        <p>Biến những mục tiêu nhỏ thành thành tựu lớn. Habitfy giúp bạn theo dõi, động viên và duy trì những thói quen tích cực mỗi ngày.</p>
        <button className="cta-button">Tải Habitfy ngay!</button>
      </div>
      <div className="hero-image">
        <img style={{ width: '60%', height: 'auto' }} src="/img/hero-app.jpg" alt="Habitfy App Interface" />
      </div>
    </section>
  );
};

export default HeroSection;