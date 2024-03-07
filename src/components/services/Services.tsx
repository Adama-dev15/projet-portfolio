import React from "react";
import "./Services.css";
import { Typography } from "../ui/Typography";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const Services = () => {
  return (
    <div className="service" id="service">
      <div className="container">
        <div className="service-content">
          <div className="servive-top">
            <Typography variant="large" className="title">
              MY EXPERTISE
            </Typography>
            <Typography variant="h2" className="bib-title border-0">
              Innovative Solutions
            </Typography>
            <Typography variant="muted" className="text-white text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              fugiat sit repellat laboriosam, consectetur ad deleniti obcaecati
              facilis! Minus possimus in eum fuga atque iure saepe asperiores.
            </Typography>
          </div>
          <div className="service-pratic">
            <div className="service_cards">
              <div className="card">
                <p className="work">Developer Frontend</p>

                <div className="icon_fleche">
                  <div className="fleche">
                    <ArrowRight size="32"></ArrowRight>
                  </div>
                </div>
                <div className="img_card">
                  <Image
                    src={"/images/frontend.jpg"}
                    alt="image"
                    width={500}
                    height={500}
                  />
                </div>
              </div>
              <div className="card">
                <p className="work">Developer Backend</p>

                <div className="icon_fleche">
                  <div className="fleche">
                    <ArrowRight size="32"></ArrowRight>
                  </div>
                </div>
                <div className="img_card">
                  <Image
                    src={"/images/backend.png"}
                    alt="image"
                    width={500}
                    height={500}
                  />
                </div>
              </div>
              <div className="card">
                <p className="work">Developer Mobile</p>

                <div className="icon_fleche">
                  <div className="fleche">
                    <ArrowRight size="32"></ArrowRight>
                  </div>
                </div>
                <div className="img_card">
                  <Image
                    src={"/images/mobile_2.jpg"}
                    alt="image"
                    width={500}
                    height={500}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
