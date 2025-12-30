import "./Hero3.css";
import image2 from "../assets/hero_airpods.jpg";
const Hero3 = () => {
  return (
    <div>
      <div className="banner">
        <div className="banner-title">
          <h1>AirPods Pro 3</h1>
          <p>The wolrd's best in-ear Active Noise Cancellation.</p>
          <div className="btn-style">
            <button>Learn More</button>
            <button className="btn2">Buy</button>
          </div>
        </div>
        <img src={image2} alt="hero_iphone" />
      </div>
    </div>
  );
};

export default Hero3;
