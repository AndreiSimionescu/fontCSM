import React from "react";
import "./Multimedia.css";
import banner from "../../images/banner-multimedia.svg";
import galerie from "../../images/imagine-galerie.png";
import {Link} from "react-router-dom";

export const Multimedia = () => {
  return (
    <div className="pagina-multimedia">
      <div className="container">
        <div className="multimedia-head">
          <img src={banner} className="imagine" alt="" />
        </div>
        <div className="multimedia-body">
          <div className="galerie-foto">
            <label htmlFor="">GALERIE FOTO</label>
            <Link to={"/foto"}>
              <div className="imagini">
                <img src={galerie} className="imagine" alt="" />
              </div>
            </Link>
          </div>
          <div className="galerie-video">
            <label htmlFor="">GALERIE VIDEO</label>
            <div className="videouri">
              <iframe
                src="https://www.youtube.com/embed/6VFcnPMFH7o"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                className="video"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
