import React from "react";
import "./Works.css";
import { Typography } from "../ui/Typography";
import Image from "next/image";

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
              <Image
                src={"/images/mobile_2.jpg"}
                alt="image"
                width={500}
                height={500}
              />

              <Image
                src={"/images/image-shop.jpg"}
                alt="image"
                width={500}
                height={500}
              />

              <Image
                src={"/images/image-illus.jpg"}
                alt="image"
                width={500}
                height={500}
              />
            </div>
            {/* right */}
            <div className="right">
              {/* top-img */}
              <div className="top-img">
                <Image
                  src={"/images/frontend.jpg"}
                  alt="image"
                  width={500}
                  height={500}
                />
              </div>
              {/* top-img end*/}
              {/* center-img */}
              <div className="center-img">
                {/* img-left */}
                <div className="img-left">
                  <Image
                    src={"/images/image-figma.jpg"}
                    alt="image"
                    width={500}
                    height={500}
                  />

                  <Image
                    src={"/images/backend.png"}
                    alt="image"
                    width={500}
                    height={500}
                  />
                </div>
                {/* img-left end*/}
                {/* img-right */}
                <div className="img-right">
                  <Image
                    src={"/images/backend.png"}
                    alt="image"
                    width={500}
                    height={500}
                  />

                  <Image
                    src={"/images/image-figma.jpg"}
                    alt="image"
                    width={500}
                    height={500}
                  />
                </div>
                {/* img-right */}
              </div>
              {/* center-img end*/}
              {/* botton-img */}
              <div className="botton-img">
                <Image
                  src={"/images/frontend.jpg"}
                  alt="image"
                  width={500}
                  height={500}
                />
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
