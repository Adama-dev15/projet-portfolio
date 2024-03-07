import React from "react";
import "./About.css";
import { Typography } from "../ui/Typography";
import { ArrowRight, Facebook, Instagram, Link, Linkedin } from "lucide-react";
import Image from "next/image";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="container">
        <div className="about-content">
          <div className="left">
            <div className="left-content">
              <Typography variant="h1" className="nameprofil">
                I&apos; m <span className="name">Jon Dawson</span>, Product
                Disegner
              </Typography>
              <Typography variant="base" className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                debitis libero quasi quos ipsa ab nobis fuga quo earum aut,
                dolor ducimus harum voluptatem!
              </Typography>
              <div className="linkAbout">
                <div className="link">
                  <a href="about"> About</a>
                </div>
                <div className="vc">
                  <a href="vc">Download CV</a>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="right-content">
              <div className="card-profil">
                <div className="icon_fleche">
                  <div className="fleche">
                    <ArrowRight size="32"></ArrowRight>
                  </div>
                </div>
                <div className="img_profil">
                  <Image
                    src={"/images/profil.png"}
                    alt="profil"
                    width={500}
                    height={500}
                  />
                </div>
              </div>

              <div className="follow">
                <Typography variant="small" className="descr">
                  follow me on:
                </Typography>
                <span className="tarit"></span>
                <div className="iconFollow">
                  <div className="icon">
                    <Facebook size="15" />
                  </div>
                  <div className="icon">
                    <Instagram size="15" />
                  </div>
                  <div className="icon">
                    <Linkedin size="15" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
