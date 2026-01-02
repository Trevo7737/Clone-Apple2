import React, { useState, useEffect } from "react";
import "./Hero6.css";

const slides = [
  {
    id: 1,
    type: "image",
    title: "No Frame Missed",
    subtitle: "Accessibility",
    buttonText: "Watch the film",
    video:
      "src/assets/group-appletv/small_2x.mp4",
    bgColor: "#1d1d1f",
  },
  {
    id: 2,
    type: "image",
    title: "No Frame Missed",
    subtitle: "Accessibility",
    buttonText: "Watch the film",
    video:
      "src/assets/group-appletv/xlarge (1).mp4",
    bgColor: "#1d1d1f",
  },
  {
    id: 3,
    type: "image",
    title: "Designed for Every Student",
    subtitle: "Accessibility",
    buttonText: "Watch the film",
    video:
      "src/assets/group-appletv/xlarge (2).mp4",
    bgColor: "#1d1d1f",
  },
  {
    id: 4,
    type: "image",
    title: "Inclusive by Design",
    subtitle: "Accessibility",
    buttonText: "Watch the film",
    video:
      "src/assets/group-appletv/xlarge (3).mp4",
    bgColor: "#1d1d1f",
  },
  {
    id: 5,
    type: "image",
    title: "Made for Everyone",
    subtitle: "Accessibility",
    buttonText: "Watch the film",
    video:
      "src/assets/group-appletv/xlarge (4).mp4",
    bgColor: "#1d1d1f",
  },
  {
    id: 6,
    type: "image",
    title: "Made for Everyone",
    subtitle: "Accessibility",
    buttonText: "Watch the film",
    video:
      "src/assets/group-appletv/xlarge.mp4",
    bgColor: "#1d1d1f",
  },
];

const Hero6 = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 70000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="hero6-container">
      <div className="hero6-header">
        <h2 className="hero6-title">More from Apple</h2>
      </div>

      <div className="hero6-carousel-container">
        <div
          className="hero6-slides-wrapper"
          style={{
            transform: `translateX(calc(15% - ${currentSlide * 20}%))`,
          }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="hero6-slide">
              {slide.type === "text" ? (
                <div
                  className="hero6-text-slide"
                  style={{
                    backgroundColor: slide.bgColor,
                    color: slide.textColor,
                  }}
                >
                  <h3 className="hero6-text-title">{slide.title}</h3>
                  <p className="hero6-text-description">{slide.description}</p>
                </div>
              ):(

                <div
                  className="hero6-image-slide"
                  style={{ backgroundColor: slide.bgColor }}
                >
                <video className="hero6-slide-img"  autoPlay muted loop>
                    <source src={slide.video} alt={slide.title} />
                </video>
                  <div className="hero6-slide-content">
                    <button className="hero6-watch-button">
                      {slide.buttonText}
                    </button>
                    <p className="hero6-slide-subtitle">
                      {slide.title} • {slide.subtitle}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="hero6-dots-container">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`hero6-dot ${
                currentSlide === index ? "hero6-dot-active" : ""
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero6;
