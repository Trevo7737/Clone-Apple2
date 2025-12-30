import video1 from "../assets/mediumtall_2x.mp4";
import "./Banner.css";
const Banner = () => {
  return (
    <div>
        <div className="banner">
          <div className="banner-title">
            <h1>Wrapping up this special season.</h1>
            <p>There's still time to make their holiday one of a kind.</p>
            <button>Shop gifts</button>
          </div>
          <video autoPlay muted>
            <source src={video1} type="video/mp4" />
          </video>
        </div>
      </div>
  );
};

export default Banner;
