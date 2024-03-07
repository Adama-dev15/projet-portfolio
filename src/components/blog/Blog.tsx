import React from "react";
import "./Blog.css";
import { Typography } from "../ui/Typography";
import { ArrowRight } from "lucide-react";

const Blog = () => {
  return (
    <div className="Blog" id="blog">
      <div className="container">
        <div className="blog-content">
          <div className="blog-top">
            <div className="title text-center">
              <Typography variant="large" className="title-part">
                MY EXPERTISE
              </Typography>
              <Typography variant="h2" className="bib-title border-0">
                Innovative Solutions
              </Typography>
            </div>
            <Typography variant="muted" className=" text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              fugiat sit repellat laboriosam, consectetur ad deleniti obcaecati
              facilis! Minus possimus in eum fuga atque iure saepe asperiores.
            </Typography>
          </div>

          <div className="blog-pratic">
            <div className="blog_cards">
              <div className="card">
                <div className="img_card">
                  <img src="../../../images/blog_1.jpg" alt="image" />
                </div>

                <div className="info">
                  {" "}
                  <h3 className="name">A great journey</h3>
                  <p className="text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et
                    eligendi aut nesciunt dolores, excepturi quam!
                  </p>
                  <Typography variant="small" className="text-center">
                    07 Octobre 2019
                  </Typography>
                </div>
                <div className="icon_fleche">
                  <div className="fleche">
                    <ArrowRight size="32"></ArrowRight>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="img_card">
                  <img src="../../../images/blog_2.jpg" alt="image" />
                </div>
                <div className="info">
                  {" "}
                  <h3 className="name">We travelled much</h3>
                  <p className="text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et
                    eligendi aut nesciunt dolores, excepturi quam!
                  </p>
                  <Typography variant="small" className="text-center">
                    07 Octobre 2019
                  </Typography>
                </div>
                <div className="icon_fleche">
                  <div className="fleche">
                    <ArrowRight size="32"></ArrowRight>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="img_card">
                  <img src="../../../images/blog_3.jpg" alt="image" />
                </div>
                <div className="info">
                  <h3 className="name">We travelled much</h3>

                  <p className="text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et
                    eligendi aut nesciunt dolores, excepturi quam!
                  </p>
                  <Typography variant="small" className="text-center ">
                    07 Octobre 2019
                  </Typography>
                </div>
                <div className="icon_fleche">
                  <div className="fleche">
                    <ArrowRight size="32"></ArrowRight>
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

export default Blog;
