import React from "react";
import "./Education.css";
import { Typography } from "../ui/Typography";
import Image from "next/image";

const Education = () => {
  return (
    <div className="education">
      <div className="container">
        <div className="education-content">
          {/* name */}
          <div className="name">
            <Typography variant="large" className="top-part">
              LOREM IPSUM
            </Typography>
            <Typography variant="h2" className="title border-0">
              Education
            </Typography>
            <Typography
              variant="muted"
              className="text-justify text-education my-5"
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe
              accusantium rerum recusandae enim? Explicabo ex aliquam, natus
              nulla suscipit pariatur voluptas quia ducimus deserunt commodi sed
              cumque eius alias reprehenderit!
            </Typography>
          </div>
          {/* name end*/}
          {/* cards-education */}
          <div className="cards-education">
            {/* left */}
            <div className="left">
              <div className="image">
                <Image
                  src={"/images/diplome.jpg"}
                  alt="image"
                  width={500}
                  height={500}
                />
              </div>
              <div className="date">
                <div className="point">
                  <span></span>
                </div>
                <Typography variant="h3">2024</Typography>
              </div>
              <div className="text">
                <Typography variant="small">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
                  officiis eius alias atque qui! Voluptatibus tempora quidem
                  cupiditate similique quibusdam!
                </Typography>
              </div>
            </div>
            {/* left end*/}
            {/* right */}
            <div className="right">
              {/* right-top */}
              <div className="right-top">
                <div className="date">
                  <div className="point">
                    <span></span>
                  </div>
                  <Typography variant="h3">2022</Typography>
                </div>
                <div className="text">
                  <Typography variant="small">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
                    officiis eius alias atque qui! Voluptatibus tempora quidem
                    cupiditate similique quibusdam!
                  </Typography>
                </div>
              </div>
              {/* right-top end*/}
              {/* right-bottom */}
              <div className="right-bottom">
                {/* right-bottomleft */}
                <div className="right-bottomleft">
                  <div className="date">
                    <div className="point">
                      <span></span>
                    </div>
                    <Typography variant="h3">2020</Typography>
                  </div>
                  <div className="text">
                    <Typography variant="small">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Ea officiis eius alias atque qui! Voluptatibus tempora
                      quidem cupiditate similique quibusdam!
                    </Typography>
                  </div>
                </div>
                {/* right-bottomleft end*/}
                {/* right-bottomright */}
                <div className="right-bottomright">
                  <div className="date">
                    <div className="point">
                      <span></span>
                    </div>
                    <Typography variant="h3">2018</Typography>
                  </div>
                  <div className="text">
                    <Typography variant="small">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Ea officiis eius alias atque qui! Voluptatibus tempora
                      quidem cupiditate similique quibusdam!
                    </Typography>
                  </div>
                </div>
                {/* right-bottomright end*/}
              </div>
              {/* right-bottom end*/}
            </div>
            {/* right end*/}
          </div>
          {/* cards-education end*/}
        </div>
      </div>
    </div>
  );
};

export default Education;
