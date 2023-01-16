import React from "react";
import "./Echipa.css";
import emblema from "../../icons/emblema-echipa.svg";
import {Navbar} from "../navbar/Navbar";
import sticker from "../../icons/echipa-sticker.svg";
import image_echipa from "../../images/imagine-echipa.png";
import img_echipa from "../../images/img-echipa.png";

export const Echipa = () => {
  return (
    <div className="pagina-echipa">
      <Navbar />
      <div className="pagina-body">
        <div className="pagina-body-content">
          <div className="pagina-body-top">
            <img src={img_echipa} alt="" className="imagine-echipa" />
          </div>
          <div className="pagina-body-bootom">
            <div className="row1">
              <div className="row1-children">
                <div className="row1-children-1">
                  <label htmlFor="row1-text">LUCIAN HUTULEAC</label>
                </div>
                <div className="row1-children-2">
                  <label htmlFor="row1-text2">ROBERT PETRARU</label>
                </div>
              </div>
            </div>
            <div className="row2">
              <div className="row2-children">
                <div className="row2-children-1">
                  <label htmlFor="row2-text">MARIUS GONTARIU</label>
                </div>
                <div className="row2-children-2">
                  <label htmlFor="row2-text2">ANDREI SASU</label>
                </div>
                <div className="row2-children-3">
                  <label htmlFor="row2-text2">ALEXANDRU DĂNILĂ</label>
                </div>
              </div>
            </div>
            <div className="row3">
              <div className="row3-children">
                <div className="row3-children-1">
                  <label htmlFor="row3-text">ALEXANDRU ROMAN</label>
                </div>
                <div className="row3-children-2">
                  <label htmlFor="row2-text2">COZMIN BOGHEAN</label>
                </div>
                <div className="row3-children-3">
                  <label htmlFor="row3-text2">VLAD ȘTREANGĂ</label>
                </div>
              </div>
            </div>
            <div className="row4">
              <div className="row4-children">
                <div className="row4-children-1">
                  <label htmlFor="row4-text">VICTOR ASMARANDEI</label>
                </div>
                <div className="row4-children-2">
                  <label htmlFor="row2-text2">ANDREI CURIC</label>
                </div>
                <div className="row4-children-3">
                  <label htmlFor="row4-text2">DENIS CROITOR</label>
                </div>
              </div>
            </div>
            <div className="row5">
              <div className="row5-children">
                <div className="row5-children-1">
                  <label htmlFor="row5-text">SABIN HORTOPEANU</label>
                </div>
                <div className="row5-children-2">
                  <label htmlFor="row2-text2">CEZAR CIUBOTARIU</label>
                </div>
                <div className="row5-children-3">
                  <label htmlFor="row5-text2">IOAN VERCIUC</label>
                </div>
              </div>
            </div>
            <div className="row6">
              <div className="row6-title">
                <label htmlFor="">Antrenor - TUDOR ORĂȘANU</label>
              </div>
            </div>
          </div>
        </div>
        <img src={emblema} alt="" className="emblema" />
        <div className="pagina-body-titlu">
          <label htmlFor="">ECHIPA</label>
        </div>
        <div className="pagina-body-sticker">
          <img src={sticker} alt="" className="sticker" />
        </div>
      </div>
    </div>
  );
};
