import React from "react";
import Homeimage from "../../HelperComponent/fonts/homeimage/Homeimage";
import victor1 from "../../assest/Vector1.png";
import victor2 from "../../assest/Vector2.png";
import boy from "../../assest/boy.png";
import crown from "../../assest/crown.png";
import galsses from "../../assest/glasses.png";
import thumbup from "../../assest/thumbup.png";
import "./Home.css";
const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="home-slider-wrapper">
        {/* left side */}
        <div className="l-home">
          <h1>H'i I Am</h1>
          <span>Md Jamirul Khan</span>
          <p>
            Frontend Developer with high level of experience in web designing
            and development, producting the Quality work
          </p>
          <div>
            <button className="l-nav-btn">Hire me</button>
          </div>
          {/* social side wraper */}
          <div>
            <Homeimage />
          </div>
        </div>
        {/* right sider iamge slider */}
        <div className="r-home">
          <div className="r-home-wrapper">
            <div className="victor1">
              <img src={victor1} alt="" />
            </div>
            <div className="victor2">
              <img src={victor2} alt="" />
            </div>
            <div className="victor3">
              <img src={boy} alt="" />
            </div>
            {/* color */}
            <div className="color"></div>
            <div className="color1"></div>
            {/* emojo */}
            <div className="home-emojo">
              <div>
                <img src={galsses} alt="" />
              </div>
              <div>
                <img src={crown} alt="" />
                <h1>Web Developer</h1>
              </div>
              <div>
                <img src={thumbup} alt="" />
                <h1>Best Design Award</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
