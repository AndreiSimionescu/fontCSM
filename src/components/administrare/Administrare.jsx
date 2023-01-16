import React from "react";
import {Navbar} from "../navbar/Navbar";
import "./Administrare.css";
import admin_echipa from "../../images/admin_echipa.png";
import admin_meciuri from "../../images/admin_meciuri.png";
import admin_palmares from "../../images/admin_palmares.png";
import admin_sponsori from "../../images/admin_sponsori.png";
import icon_ajustare from "../../icons/icon_ajustare.svg"
import {Link} from "react-router-dom";
export const Administrare = () => {
  return (
    <div className="administrare">
      <Navbar />
      <div className="administrare-container">
        <div className="administrare-div1">
          <div className="administrare-div11"></div>
          <div className="administrare-div12">
            <label htmlFor="">PAGINA DE ADMINISTRARE</label>
          </div>
        </div>
        <div className="administrare-div2">
          <div className="administrare-div-main">
            <div className="administrare-div-content">
              <div className="administrare-content-titlu">
                <label htmlFor="">ADMINISTRARE ECHIPĂ</label>
              </div>
              <div className="administrare-content-imagine">
                <img src={admin_echipa} className="img-administrare" alt="" />
              </div>
            </div>
            <div className="div-button">
              <div className="div-icon-button"><img src={icon_ajustare} alt="" /></div>
              <Link to="/administreaza">
              <div className="div-text-button"><label htmlFor="">Administreaza</label></div>
              </Link>
            </div>
          </div>
          <div className="administrare-div-main">
            <div className="administrare-div-content">
              <div className="administrare-content-titlu">
              <label htmlFor="">ADMINISTRARE MECIURI</label>
              </div>
              <div className="administrare-content-imagine">
              <img src={admin_meciuri} className="img-administrare" alt="" />
              </div>
            </div>
            <div className="div-button">
              <div className="div-icon-button"><img src={icon_ajustare} alt="" /></div>
              <div className="div-text-button"><label htmlFor="">Administreaza</label></div>
            </div>
          </div>
        </div>
        <div className="administrare-div3">
          <div className="administrare-div-main">
            <div className="administrare-div-content">
              <div className="administrare-content-titlu">
              <label htmlFor="">ADMINISTRARE SPONSORI</label>
              </div>
              <div className="administrare-content-imagine">
              <img src={admin_palmares} className="img-administrare" alt="" />
              </div>
            </div>
            <div className="div-button">
              <div className="div-icon-button"><img src={icon_ajustare} alt="" /></div>
              <div className="div-text-button"><label htmlFor="">Administreaza</label></div>
            </div>
          </div>
          <div className="administrare-div-main">
            <div className="administrare-div-content">
              <div className="administrare-content-titlu">
              <label htmlFor="">ADMINISTRARE PALMARES</label>
              </div>
              <div className="administrare-content-imagine">
              <img src={admin_sponsori} className="img-administrare" alt="" />
              </div>
            </div>
            <div className="div-button">
              <div className="div-icon-button"><img src={icon_ajustare} alt="" /></div>
              <div className="div-text-button"><label htmlFor="">Administreaza</label></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
