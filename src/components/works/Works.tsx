import React from "react";
import "./Works.css";
import { Typography } from "../ui/Typography";

const Works = () => {
  return (
    <div className="works" id="portfolio">
      <div className="container">
        <div className="works-content">
          <div className="top">
            <Typography variant="h2" className="title border-0">
              Featured Works
            </Typography>
          </div>
          {/* images */}
          <div className="images">
            <div className="left">
              <img src="../../../images/mobile_2.jpg" alt="image" />
              <img src="../../../images/image-shop.jpg" alt="image" />
              <img src="../../../images/image-illus.jpg" alt="image" />
            </div>
            {/* right */}
            <div className="right">
              {/* top-img */}
              <div className="top-img">
                <img src="../../../images/frontend.jpg" alt="image" />
              </div>
              {/* top-img end*/}
              {/* center-img */}
              <div className="center-img">
                {/* img-left */}
                <div className="img-left">
                  <img src="../../../images/image-figma.jpg" alt="image" />
                  <img src="../../../images/backend.png" alt="image" />
                </div>
                {/* img-left end*/}
                {/* img-right */}
                <div className="img-right">
                  <img src="../../../images/backend.png" alt="image" />
                  <img src="../../../images/image-figma.jpg" alt="image" />
                </div>
                {/* img-right */}
              </div>
              {/* center-img end*/}
              {/* botton-img */}
              <div className="botton-img">
                <img src="../../../images/frontend.jpg" alt="image" />
              </div>
              {/* botton-img end*/}
            </div>
            {/* right */}
          </div>
          {/* images */}
        </div>
      </div>
    </div>
  );
};

export default Works;
