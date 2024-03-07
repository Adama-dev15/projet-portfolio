import React from "react";
import { Typography } from "../ui/Typography";
import "./Skill.css";

const Skill = () => {
  return (
    <div className="skill">
      <div className="container">
        <div className="skill-content">
          <div className="left">
            <Typography variant="large" className="title">
              MY SKILL
            </Typography>
            <Typography variant="h2" className="bib-title border-0">
              Beautiful and unique digital experiences
            </Typography>
            <Typography variant="muted" className="text-black text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              fugiat sit repellat laboriosam, consectetur ad deleniti obcaecati
              facilis! Minus possimus in eum fuga atque iure saepe asperiores.
            </Typography>
          </div>
          {/* mobile */}
          <div className="right hidden-skill">
            {/* figma */}
            <div className="figma seame-element">
              <div className="left">
                <div className="logo-title">
                  <div className="logo">
                    <img src="../../../images/logo-figma.jpg" alt="logo" />
                  </div>
                  <div className="title">Figma</div>
                </div>
                <div className="text">
                  <Typography variant="small">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </Typography>
                </div>
              </div>
              <div className="right">
                <div className="image">
                  <img src="../../../images/image-figma.jpg" alt="image" />
                </div>
              </div>
            </div>

            <div className="two-elements">
              {/* photoShop */}
              <div className="photoShop ia-shop">
                <div className="left">
                  <div className="logo-title">
                    {" "}
                    <div className="logo">
                      <img src="../../../images/image-shop.jpg" alt="logo" />
                    </div>
                    <div className="title">PhotoShop</div>
                  </div>

                  <div className="text">
                    <Typography variant="small">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </Typography>
                  </div>
                </div>
                <div className="right">
                  <div className="image">
                    <img src="../../../images/image-shop.jpg" alt="image" />
                  </div>
                </div>
              </div>
              {/* illustrator */}
              <div className="illustrator ia-shop">
                <div className="left">
                  <div className="logo-title">
                    {" "}
                    <div className="logo">
                      <img src="../../../images/logo-illus.jpg" alt="logo" />
                    </div>
                    <div className="title">Illustrator</div>
                  </div>

                  <div className="text">
                    <Typography variant="small">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </Typography>
                  </div>
                </div>
                <div className="right">
                  <div className="image">
                    <img src="../../../images/image-illus.jpg" alt="image" />
                  </div>
                </div>
              </div>
            </div>
            {/* canva */}
            <div className="canva seame-element">
              <div className="left">
                <div className="logo-title">
                  <div className="logo">
                    <img src="../../../images/logo-canva.jpg" alt="logo" />
                  </div>
                  <div className="title">Canva</div>
                </div>
                <div className="text">
                  <Typography variant="small">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </Typography>
                </div>
              </div>
              <div className="right">
                <div className="image">
                  <img src="../../../images/canva-img.webp" alt="image" />
                </div>
              </div>
            </div>
          </div>
          {/* mobile end*/}

          {/* tablets screen */}
          <div className="skill-know">
            <div className="left-skill">
              {/* figma */}
              <div className="figma seame-element-forma">
                <div className="left">
                  <div className="logo-title">
                    <div className="logo">
                      <img src="../../../images/logo-figma.jpg" alt="logo" />
                    </div>
                    <div className="title">Figma</div>
                  </div>
                  <div className="text">
                    <Typography variant="small">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </Typography>
                  </div>
                </div>
                <div className="right">
                  <div className="image">
                    <img src="../../../images/image-figma.jpg" alt="image" />
                  </div>
                </div>
              </div>
              {/* figma end*/}
              {/* illustrator */}
              <div className="illustrator ia-shop-forma">
                <div className="left">
                  <div className="logo-title">
                    {" "}
                    <div className="logo">
                      <img src="../../../images/logo-illus.jpg" alt="logo" />
                    </div>
                    <div className="title">Illustrator</div>
                  </div>

                  <div className="text">
                    <Typography variant="small">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </Typography>
                  </div>
                </div>
                <div className="right">
                  <div className="image">
                    <img src="../../../images/image-illus.jpg" alt="image" />
                  </div>
                </div>
              </div>
              {/* illustrator end*/}
            </div>
            <div className="right-skill">
              {/* photoShop */}
              <div className="photoShop ia-shop-forma">
                <div className="left">
                  <div className="logo-title">
                    {" "}
                    <div className="logo">
                      <img src="../../../images/image-shop.jpg" alt="logo" />
                    </div>
                    <div className="title">PhotoShop</div>
                  </div>

                  <div className="text">
                    <Typography variant="small">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </Typography>
                  </div>
                </div>
                <div className="right">
                  <div className="image">
                    <img src="../../../images/image-shop.jpg" alt="image" />
                  </div>
                </div>
              </div>
              {/* photoShop end*/}
              {/* canva */}
              <div className="canva seame-element-forma">
                <div className="left">
                  <div className="logo-title">
                    <div className="logo">
                      <img src="../../../images/logo-canva.jpg" alt="logo" />
                    </div>
                    <div className="title">Canva</div>
                  </div>
                  <div className="text">
                    <Typography variant="small">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </Typography>
                  </div>
                </div>
                <div className="right">
                  <div className="image">
                    <img src="../../../images/canva-img.webp" alt="image" />
                  </div>
                </div>
              </div>
              {/* canva end*/}
            </div>
          </div>
          {/* tablets screen end*/}
        </div>
      </div>
    </div>
  );
};

export default Skill;
