import React from 'react';
import '../styles/Benefits.css';

const Benefits = () => {
  return (
    <section id="benefits" className="benefits">
      <h2>Lợi ích của Habitfy</h2>
      <div className="benefits-grid">
        <div className="benefit-card">
          <h3>Tiết kiệm thời gian</h3>
          <p>Xây dựng thói quen bền vững với hệ thống nhắc nhở thông minh</p>
        </div>
        <div className="benefit-card">
          <h3>Tăng cường động lực</h3>
          <p>Giao diện thân thiện và hệ thống khen thưởng giúp bạn luôn có động lực</p>
        </div>
        <div className="benefit-card">
          <h3>Theo dõi cá nhân hóa</h3>
          <p>Phân tích tiến trình và đưa ra gợi ý phù hợp với mục tiêu của bạn</p>
        </div>
      </div>
    </section>
  );
};

export default Benefits;