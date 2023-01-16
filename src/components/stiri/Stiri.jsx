import React from "react";
import "./Stiri.css";
import emblema from "../../icons/emblema-echipa.svg";
import {Navbar} from "../navbar/Navbar";
import sticker from "../../icons/echipa-sticker.svg";
import image_echipa from "../../images/imagine-echipa.png";
import img_echipa from "../../images/img-echipa.png";
import {StiriData} from "./StiriData";

export const Stiri = () => {
  return (
    <div className="page-news">
      <Navbar />
      <div className="div-prin">
        {StiriData.map((val) => {
          return (
            <div className="div-news">
              <div className="div-img">{val.icon}</div>
              <div className="div-content">
                <div className="div-titlu"></div>
                <div className="div-text"></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
