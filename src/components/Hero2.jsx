import image1 from "../assets/hero_iphone.jpg";
import "./Hero2.css";
const Hero2 = () => {
  return (
      <div className="banner">
        <div className="banner-title">
          <h1>iPhone</h1>
          <p>Say hello to the lastest generation of iPhone.</p>
          <div className="btn-style">
            <button>Learn More</button>
            <button className="btn2">Shop iPhone</button>
          </div>
        </div>
        <img src={image1} alt="hero_iphone" />
      </div>
  );
};

export default Hero2;
