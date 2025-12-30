import "./Hero4.css";
import image5 from "../assets/hero_apple_watch-largetall_2x.jpg";
import image6 from "../assets/hero_logo_watch_sl.png";
const Hero4 = () => {
  return (
    <div>
      <div className="banner">
        <div className="banner-title">
          <div className="out-contain">
            <div className="con-title">
              <img src={image6} alt="logo-watch" />
            </div>
          </div>
          <p>
            Turn resolution in to routines.
            <br />
            Quit quitting your fitness goals.
          </p>
          <div className="btn-style">
            <button>Learn More</button>
            <button className="btn2">Buy</button>
          </div>
        </div>
        <img src={image5} alt="hero_watch" />
      </div>
    </div>
  );
};

export default Hero4;
