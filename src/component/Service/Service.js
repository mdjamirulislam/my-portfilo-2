import React from "react";
import ServiceCard from "../../HelperComponent/fonts/ServiceCard/ServiceCard";
import "./Service.css";
const Service = () => {
  return (
    <div className="s-wrapper">
      <div className="s-slider-wrapper">
        <div className="s-slider-left">
          <h1>MY Awesome </h1>
          <span>Service</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            culpa itaque aut voluptas voluptate
          </p>
          <button className="download-btn l-nav-btn">
            <a href="./" download>
              Download cv
            </a>
          </button>
        </div>
        {/* aall card */}
        <div className="card">
          <div>
            <ServiceCard
              text="Design"
              body="Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd"
              btn="learn more"
            />
          </div>
          <div>
            <ServiceCard
              text="Design"
              body="Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd"
              btn="learn more"
            />
          </div>
          <div>
            <ServiceCard
              text="Design"
              body="Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd"
              btn="learn more"
            />
          </div>
          <div>
            <ServiceCard
              text="Design"
              body="Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd"
              btn="learn more"
            />
          </div>
          
          
        </div>
      </div>
      
    </div>
  );
};

export default Service;
