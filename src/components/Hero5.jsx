import React, { useState, useEffect } from "react";
import "./Hero5.css";
const slides = [
  {
    id: 1,
    genre: "Action",
    tagline: "Now streaming on Apple TV",
    image:'src/assets/group-appletv/image1.jpg',
    bgClass: "slide-bg-1",
  },
  {
    id: 2,
    genre: "Action",
    tagline: "Now streaming on Apple TV",
    image:'src/assets/group-appletv/image2.jpg',
    bgClass: "slide-bg-2",
  },
  {
    id: 3,
    genre: "Action",
    tagline: "Now streaming on Apple TV",
    image:'src/assets/group-appletv/image3.jpg',
    bgClass: "slide-bg-2",
  },
  {
    id: 4,
    genre: "Action",
    tagline: "Now streaming on Apple TV",
    image:'src/assets/group-appletv/image4.jpg',
    bgClass: "slide-bg-2",
  },
  {
    id: 5,
    genre: "Action",
    tagline: "Now streaming on Apple TV",
    image:'src/assets/group-appletv/image5.jpg',
    bgClass: "slide-bg-2",
  },
  {
    id: 6,
    genre: "Action",
    tagline: "Now streaming on Apple TV",
    image:'src/assets/group-appletv/image6.jpg',
    bgClass: "slide-bg-2",
  },
  {
    id: 7,
    genre: "Action",
    tagline: "Now streaming on Apple TV",
    image:'src/assets/group-appletv/image7.jpg',
    bgClass: "slide-bg-2",
  },
  {
    id: 8,
    genre: "Action",
    tagline: "Now streaming on Apple TV",
    image:'src/assets/group-appletv/image8.jpg',
    bgClass: "slide-bg-2",
  },
  {
    id: 9,
    genre: "Action",
    tagline: "Now streaming on Apple TV",
    image:'src/assets/group-appletv/image9.jpg',
    bgClass: "slide-bg-2",
  },

];

const Hero5 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="container">
      <div className="header">
        <h1 className="header-title">Endless entertainment.</h1>
      </div>

      <div className="carousel-container">
        <div
          className="slides-wrapper"
          style={{ 
            transform: `translateX(calc(15% - ${currentSlide * 20}%))` 
          }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="slide">
              <div className={`slide-bg ${slide.bgClass}`}>
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="slide-img"
                />
              </div>
              <div className="slide-content">

                <h2 className="slide-title">{slide.title}</h2>

                <button className="stream-button">Stream now</button>

                <p className="slide-info">
                  <span className="genre">{slide.genre}</span> • {slide.tagline}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="dots-container">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`dot ${currentSlide === index ? "dot-active" : ""}`}
              aria-label={`Go to slide ${index+1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero5;
