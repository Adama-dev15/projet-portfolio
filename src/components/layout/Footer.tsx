import { Facebook, Instagram, Twitter, User, Youtube } from "lucide-react";
import { Typography } from "../ui/Typography";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer id="contact">
      <div className="container">
        <div className="footer-content ">
          <div className="footer-top border-b my-8 py-5">
            <Typography variant="h2" className="border-0">
              Lets Connect there
            </Typography>
            <div className="contact">
              <a href="contact">Contact Us</a>
            </div>
          </div>
          <div className="footer-center border-b">
            <div className="top">
              <div className="profil-name">JD</div>
              <p className="text-footer">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Mollitia tempora harum nihil delectus veniam, magnam vel,
                voluptatem repellat velit iusto fugit fuga eligendi iste
                obcaecati. Odit minus molestias culpa doloremque.
              </p>
              <div className="media">
                <Facebook />
                <Twitter />
                <Instagram />
                <Youtube />
              </div>
            </div>
            <div className="center ">
              <div className="nav-contact">
                <div className="navigation">
                  <Typography variant="h3">Navigation</Typography>
                  <ul>
                    <li>
                      <a href="home">Home</a>
                    </li>
                    <li>
                      <a href="aboutUs">About Us</a>
                    </li>
                    <li>
                      <a href="service">Service</a>
                    </li>
                    <li>
                      <a href="resume">Resume</a>
                    </li>
                    <li>
                      <a href="projet">Projet</a>
                    </li>
                  </ul>
                </div>
                <div className="contact">
                  <Typography variant="h3">Contact</Typography>

                  <div className="number">
                    <p>+1 (234) 547-89-00</p>
                    <p>info@gmail.com</p>
                    <p>Portfolio.com</p>
                  </div>
                </div>
              </div>
              <div className="bottom">
                <Typography variant="h3">Get the latest information</Typography>
                <div className="gmail">
                  <input type="email" placeholder="Email Adress" />
                  <button type="submit">
                    <User />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="left">
              Cpoyright {new Date().getFullYear()} Designed by Developios
            </div>
            <div className="right">Team & Condition | Privacy Policy</div>
          </div>
        </div>
      </div>
    </footer>
  );
};
