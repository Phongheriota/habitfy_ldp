import React, { useState } from 'react';
import '../styles/Features.css';

const CardSlider = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => 
        prevIndex === cards.length - 1 ? 0 : prevIndex + 1
      );
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? cards.length - 1 : prevIndex - 1
      );
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const goToSlide = (index) => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex(index);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const getCardClass = (index) => {
    if (index === currentIndex) return 'card active';
    if (index === (currentIndex - 1 + cards.length) % cards.length) return 'card prev';
    if (index === (currentIndex + 1) % cards.length) return 'card next';
    return 'card hidden';
  };

  return (
    <div className="slider-container">
      <div className="card-slider">
        {cards.map((card, index) => (
          <div 
            key={index}
            className={getCardClass(index)}
            style={{ transition: isTransitioning ? 'all 0.5s ease' : 'none' }}
          >
            <img src={card.image} alt={card.title} />
            <div className="card-content">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="slider-buttons">
        <button className="slider-button" onClick={prevSlide}>&lt;</button>
        <button className="slider-button" onClick={nextSlide}>&gt;</button>
      </div>
      <div className="slider-dots">
        {cards.map((_, index) => (
          <span 
            key={index} 
            className={`dot ${index === currentIndex ? 'active' : ''}`} 
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

const Feature = () => {
  const feature1Cards = [
    {
      image: "/img/image3.jpg",
      title: "Tạo thói quen mới",
      description: "Dễ dàng thiết lập thói quen hàng ngày"
    },
    {
      image: "/img/image4.jpg",
      title: "Tạo thói quen mới",
      description: "Dễ dàng thiết lập thói quen hàng ngày"
    },
    {
      image: "/img/image5.jpg",
      title: "Tạo thói quen mới",
      description: "Dễ dàng thiết lập thói quen hàng ngày"
    },
    {
      image: "/img/image6.jpg",
      title: "Tạo thói quen mới",
      description: "Dễ dàng thiết lập thói quen hàng ngày"
    },
    {
      image: "/img/image1.jpg",
      title: "Tùy chỉnh cá nhân",
      description: "Chọn màu sắc và biểu tượng yêu thích"
    },
    {
      image: "/img/image2.jpg",
      title: "Nhắc nhở thông minh",
      description: "Không bỏ lỡ bất kỳ ngày nào"
    }
  ];

  const feature2Cards = [
    {
      image: "/img/image7.png",
      title: "Lịch trình AI",
      description: "Tự động đề xuất thời gian tốt nhất"
    },
    {
      image: "/img/image8.png",
      title: "Tối ưu hóa",
      description: "Phân bổ thời gian hợp lý"
    },
    {
      image: "/img/image9.png",
      title: "Tối ưu hóa",
      description: "Phân bổ thời gian hợp lý"
    }
  ];

  const feature3Cards = [
    {
      image: "/img/image10.jpg",
      title: "Theo dõi tiến độ",
      description: ""
    },
    {
      image: "/img/image11.jpg",
      title: "Thống kê chi tiết",
      description: "Xem streak và số ngày thực hiện"
    },
    {
      image: "/img/image12.jpg",
      title: "Thống kê chi tiết",
      description: "Biểu đồ tiến độ theo tuần/tháng"
    }
  ];

  return (
    <section id="features" className="features">
      <h2>Tính năng nổi bật</h2>
      
      <div className="feature">
        <div className="feature-content">
          <h3>Tạo thói quen</h3>
          <p>Thiết lập thói quen mới dễ dàng với các tùy chọn cá nhân hóa</p>
        </div>
        <CardSlider cards={feature1Cards} />
      </div>

      <div className="feature">
        <div className="feature-content">
          <h3>Lịch trình AI</h3>
          <p>AI thông minh giúp tạo lịch trình tối ưu cho thói quen của bạn</p>
        </div>
        <CardSlider cards={feature2Cards} />
      </div>

      <div className="feature">
        <div className="feature-content">
          <h3>Theo dõi tiến độ</h3>
          <p>Xem chi tiết quá trình và thành tích của bạn</p>
        </div>
        <CardSlider cards={feature3Cards} />
      </div>
    </section>
  );
};

export default Feature;