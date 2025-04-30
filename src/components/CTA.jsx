import React from 'react';
import '../styles/CTA.css';

const CTA = () => {
  return (
    <section id="download" className="cta">
      <h2>Sẵn sàng thay đổi cuộc sống của bạn?</h2>
      <p>Tải ứng dụng ngay hôm nay và bắt đầu hành trình xây dựng thói quen!</p>
      <button className="cta-button">Tải ngay</button>
      <div className="app-stores">
        <p>Hiện có sẵn trên:</p>
        <div className="store-buttons">
          <button className="play-store">Google Play</button>
        </div>
      </div>
    </section>
  );
};

export default CTA;