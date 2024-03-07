import React from "react";
import "./ClientHappy.css";
import { Typography } from "../ui/Typography";
import { Star, StarHalfIcon, StarIcon, StarOffIcon } from "lucide-react";
import { StarFilledIcon } from "@radix-ui/react-icons";
import Image from "next/image";

const ClientHappy = () => {
  return (
    <div className="clientHappy">
      <div className="container">
        <div className="clientHappy-content">
          {/* top */}
          <div className="top">
            <Typography variant="h2" className="border-0">
              Happy Clients Say
            </Typography>
            <Typography variant="p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              ipsa accusamus, porro eius unde expedita vel quod culpa omnis, non
              aspernatur! Numquam voluptatum exercitationem vero reiciendis
              expedita, nostrum veniam beatae.
            </Typography>
          </div>
          {/* top end*/}
          {/* Testimonial */}
          <div className="testimonial">
            {/* card-testimonial */}
            <div className="card-testimonial">
              <div className="top">
                <div className="image">
                  <Image
                    src={"/images/temoi_2.jpg"}
                    alt="image"
                    width={500}
                    height={500}
                  />
                </div>
                <div className="name">
                  <div className="user-name">
                    <Typography variant="h3">Elsa Aptas</Typography>
                  </div>
                  <div className="othe">
                    <Typography variant="p">CEO, Lirante</Typography>
                  </div>
                </div>
              </div>
              <div className="center">
                <div className="etoils">
                  <StarFilledIcon className="text-yellow-500 " />
                  <StarFilledIcon className="text-yellow-500 " />
                  <StarFilledIcon className="text-yellow-500 " />
                  <StarFilledIcon className="text-yellow-500 " />
                  <StarFilledIcon className="text-yellow-500 " />
                </div>
                <div className="number">5.0</div>
              </div>
              <div className="text">
                <Typography variant="small" className="text-justify">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
                  doloribus reprehenderit ab vitae enim expedita ratione
                  sapiente cupiditate! Non ipsum ullam ad quas, natus corporis.
                </Typography>
              </div>
            </div>
            {/* card-testimonial end*/}

            {/* card-testimonial */}
            <div className="card-testimonial">
              <div className="top">
                <div className="image">
                  <Image
                    src={"/images/temoi.jpg"}
                    alt="image"
                    width={500}
                    height={500}
                  />
                </div>
                <div className="name">
                  <div className="user-name">
                    <Typography variant="h3">Jonnas Jhon</Typography>
                  </div>
                  <div className="othe">
                    <Typography variant="p">CEO, Lirante</Typography>
                  </div>
                </div>
              </div>
              <div className="center">
                <div className="etoils">
                  <StarFilledIcon className="text-yellow-500 " />
                  <StarFilledIcon className="text-yellow-500 " />
                  <StarFilledIcon className="text-yellow-500 " />
                </div>
                <div className="number">3.0</div>
              </div>
              <div className="text">
                <Typography variant="small" className="text-justify">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
                  doloribus reprehenderit ab vitae enim expedita ratione
                  sapiente cupiditate! Non ipsum ullam ad quas, natus corporis.
                </Typography>
              </div>
            </div>
            {/* card-testimonial end*/}

            {/* card-testimonial */}
            <div className="card-testimonial">
              <div className="top">
                <div className="image">
                  <Image
                    src={"/images/temoi_3.jpg"}
                    alt="image"
                    width={500}
                    height={500}
                  />
                </div>
                <div className="name">
                  <div className="user-name">
                    <Typography variant="h3">Andrés Ceballos</Typography>
                  </div>
                  <div className="othe">
                    <Typography variant="p">CEO, Lirante</Typography>
                  </div>
                </div>
              </div>
              <div className="center">
                <div className="etoils">
                  <StarFilledIcon className="text-yellow-500 " />
                  <StarFilledIcon className="text-yellow-500 " />
                  <StarFilledIcon className="text-yellow-500 " />
                  <StarFilledIcon className="text-yellow-500 " />
                </div>
                <div className="number">4.0</div>
              </div>
              <div className="text">
                <Typography variant="small" className="text-justify">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
                  doloribus reprehenderit ab vitae enim expedita ratione
                  sapiente cupiditate! Non ipsum ullam ad quas, natus corporis.
                </Typography>
              </div>
            </div>
            {/* card-testimonial end*/}
          </div>
          {/* Testimonial end*/}
        </div>
      </div>
    </div>
  );
};

export default ClientHappy;
