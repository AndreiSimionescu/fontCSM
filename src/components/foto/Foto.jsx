import React from "react";
import {Navbar} from "../navbar/Navbar";
import "./Foto.css";
import img1 from "../../images/img1.svg";
import img2 from "../../images/img2.svg";
import img3 from "../../images/img3.svg";
import img4 from "../../images/img4.svg";
import img5 from "../../images/img5.svg";
import img6 from "../../images/img6.svg";

export const Foto = () => {
  return (
    <div className="foto">
      <Navbar />
      <div className="div-principal">
        <div className="div-principal-1">
          <div className="div-principal-1-top"></div>
          <div className="div-principal-1-bottom">
            <label htmlFor="" className="div-principal-1-bottom-titlu">
              GALERIE FOTO
            </label>
          </div>
        </div>
        <div className="div-principal-imagine">
          <div className="div-imagine">
            <img src={img1} alt="" className="imagine" />
          </div>
          <div className="div-imagine">
            <img src={img2} alt="" className="imagine" />
          </div>
          <div className="div-imagine">
            <img src={img3} alt="" className="imagine" />
          </div>
        </div>
        <div className="div-principal-imagine">
          <div className="div-imagine">
            <img src={img4} alt="" className="imagine" />
          </div>
          <div className="div-imagine">
            <img src={img5} alt="" className="imagine" />
          </div>
          <div className="div-imagine">
            <img src={img6} alt="" className="imagine" />
          </div>
        </div>
      </div>
    </div>
  );
};
