import image from "../assets/iPad_air_large_2x.jpg";
import imglog from "../assets/logo-ipad.png";
import img7 from "../assets/macbook_air_large_2x.jpg";
import imgcase from "../assets/image_ipadaircase.jpg";
import imgminipod from "../assets/homepod_mini.jpg";
import tradein from "../assets/image copy 3.png";
import imgtrade from "../assets/image copy 4.png";
import imgcard from "../assets/logo-card.png";
import imgftcard from "../assets/feature_card.jpg";
import "./Product.css";
const product = () => {
  return (
    <div className="hero-ipad">
      <div className="ft-items">
        <div className="ft-title">
          <img src={imglog} alt="logo-ipad" />
        </div>
        <p>Now supercharged by M3 chip.</p>
        <div className="btn-out">
          <button>Learn More</button>
          <button className="btn3">Buy</button>
        </div>
        <img src={image} alt="ipad_air" />
      </div>

      {/* macbook_air_large_2x */}
      <div className="ft-items">
        <div className="ft-title">
          <img src={imglog} alt="logo-ipad" />
        </div>
        <p style={{ textAlign: "center" }}>
          Sky blue color. <br />
          Sky high performance with M4.
        </p>
        <div className="btn-out">
          <button>Learn More</button>
          <button className="btn3">Buy</button>
        </div>
        <img src={img7} alt="ipad_air" />
      </div>

      <div className="ft-items">
        <div className="ft-title">
          <h1>iPad</h1>
        </div>
        <p style={{ textAlign: "center" }}>
          Now with the speed of the A16 chip. <br />
          and double the starting storage.
        </p>
        <div className="btn-out">
          <button>Learn More</button>
          <button className="btn3">Buy</button>
        </div>
        <img src={imgcase} alt="ipad_air" />
      </div>
      {/* homemini pod */}
      <div className="ft-items">
        <div className="ft-items">
          <div className="ft-title">
            <h1 style={{ fontWeight: "500", fontSize: "30px", width: "250px" }}>
              HomePod mini
            </h1>
          </div>
          <div
            className="btn-out"
            style={{ position: "absolute", top: "20%", left: "44%" }}
          >
            <button>Learn More</button>
            <button className="btn3">Buy</button>
          </div>
          <img src={imgminipod} alt="ipad_air" />
        </div>
      </div>
      {/* trade-in */}
      <div className="ft-items" style={{ display: "flex", gap: "20px" }}>
        <div className="ft-title" style={{ width: "155px" }}>
          <img src={tradein} alt="" />
        </div>
        <p style={{ position: "absolute", top: "15%", textAlign: "center" }}>
          Get up to $180-$670 <br />
          in credit when you tade in <br />
          iPhone 13 or higher.
        </p>
        <div
          className="btn-out"
          style={{ position: "absolute", top: "30%", left: "39%" }}
        >
          <button>Get your estimate</button>
        </div>
        <img src={imgtrade} alt="ipad_air" />
      </div>
      <div className="ft-items">
        <div
          className="ft-title"
          style={{ width: "150px", marginBottom: "10px" }}
        >
          <img src={imgcard} alt="" />
        </div>
        <p style={{ position: "absolute", top: "20%", textAlign: "center" }}>
          Get up to 3% Daily Cash back <br />
          with every purchase.
        </p>
        <div
          className="btn-out"
          style={{ position: "absolute", top: "30%", left: "35%" }}
        >
          <button>Learn More</button>
          <button className="btn3">Apply Now</button>
        </div>
        <img src={imgftcard} alt="ipad_air" />
      </div>
    </div>
  );
};

export default product;
