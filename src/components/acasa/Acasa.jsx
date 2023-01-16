import React from "react";
import {Navbar} from "../navbar/Navbar";
import "./Acasa.css";
import emblema1 from "../../images/emblema1-meci-urmator.svg";
import emblema2 from "../../images/emblema2-meci-urmator.svg";
import icon_facebook from "../../icons/icon_facebook.svg";
import icon_instagram from "../../icons/icon_instagram.svg";
import {ClasamentData} from "./ClasamentData";
import {SponsoriData} from "./SponsoriData";

export const Acasa = () => {
  console.log(ClasamentData);
  return (
    <div className="acasa">
      <div className="pagina1">
        <Navbar />
      </div>
      <div className="pagina2">
        <div className="meci-urmator-container">
          <div className="meci-urmator">
            <div className="meci-urmator-date">
              <label htmlFor="" className="date">
                22 OCTOMBRIE 2022 ORA 18:00
              </label>
            </div>
            <div className="meci-urmator-time">
              <div className="meci-urmator-time-top">
                <div className="meci-urmator-time-top-nume-echipa">
                  <label htmlFor="">S. C. M Craiova</label>
                </div>
                <div className="meci-urmator-time-top-time">
                  <div className="div">
                    <label htmlFor="">01</label>
                  </div>
                  <div className="div">
                    <label htmlFor="">23</label>
                  </div>
                  <div className="div">
                    <label htmlFor="">54</label>
                  </div>
                  <div className="div">
                    <label htmlFor="">03</label>
                  </div>
                </div>
                <div className="meci-urmator-time-top-nume-echipa">
                  <label htmlFor=""> C. S. M Suceava</label>
                </div>
              </div>
              <div className="meci-urmator-time-bottom">
                <div className="meci-urmator-time-bottom-middle">
                  <div className="div-time">
                    <label htmlFor="">ZILE</label>
                  </div>
                  <div className="div-time">
                    <label htmlFor="">ORE</label>
                  </div>
                  <div className="div-time">
                    <label htmlFor="">MIN</label>
                  </div>
                  <div className="div-time">
                    <label htmlFor="">SEC</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img src={emblema1} alt="" className="emb1" />
          <div className="meci-urmator-titlu">
            <label htmlFor="" className="lbl-titlu">
              MECIUL URMATOR
            </label>
          </div>
          <img src={emblema2} alt="" className="emb2" />
        </div>
        <div className="urare">
          <label htmlFor="">Te așteptăm alături de noi!</label>
        </div>
      </div>
      <div className="pagina3"></div>
      <div className="pagina4">
        <div className="pagina4-container">
          <div className="pagina4-titlu">
            <label htmlFor="">CLASAMENT Divizia A1</label>
          </div>
          <div className="pagina4-clasament-container">
            <div className="pagina4-clasament-banner">
              <div className="pagina4-clasament-banner-echipa">
                <label htmlFor="">ECHIPA</label>
              </div>
              <div className="pagina4-clasament-banner-echipa-div">
                <label htmlFor="">MECIURI</label>
              </div>
              <div className="pagina4-clasament-banner-echipa-div">
                <label htmlFor="">VICTORII</label>
              </div>
              <div className="pagina4-clasament-banner-echipa-div">
                <label htmlFor="">INFRANGERI</label>
              </div>
              <div className="pagina4-clasament-banner-echipa-div">
                <label htmlFor="">SETURI</label>
              </div>
              <div className="pagina4-clasament-banner-echipa-div">
                <label htmlFor="">PUNCTE</label>
              </div>
            </div>
            <div className="container-second-cont">
              {        
              ClasamentData.map((val) => {
                return (
                  <div className="container-line">
                    <div className="column1">
                      <div className="div-column1-icon">{}</div>
                      <div className="div-column1-nume">
                        <label htmlFor="">{val.echipa}</label>
                      </div>
                    </div>
                    <div className="column">{val.meciuri}</div>
                    <div className="column">{val.victorii}</div>
                    <div className="column">{val.infrangeri}</div>
                    <div className="column">{val.seturi}</div>
                    <div className="column">{val.puncte}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="pagina5">
        <div className="container-pagina5">
          <div className="div1-container-pagina5">
            <div className="part-top-div1">
              <label htmlFor="">SPONSORI</label>
            </div>
            <div className="part-bottom-div1">
              {SponsoriData.map((val) => {
                return <div className="sponsor">{val.icon}</div>;
              })}
            </div>
          </div>
          <div className="div2-container-pagina5">
            <div className="div2-children">
              <div className="div2-children-children1">
                <label htmlFor="">MULTIMEDIA</label>
                <div className="div2-children-children-icon">
                  <div className="div2-children-children-children-icon">
                    <img className="img-facebook" src={icon_facebook} alt="" />
                    <img classname="img-insta" src={icon_instagram} alt="" />
                  </div>
                </div>
              </div>
              <div className="div2-children-children2">
                <p>
                  Link Site Web Club Sportiv Municipal Suceava-toate secțiile :
                  http://www.csm-suceava.ro/
                </p>
              </div>
              <div className="div2-children-children3"></div>
            </div>
            <div className="div2-children2"></div>
            <div className="div2-children"></div>
          </div>
          <div className="div3-container-pagina5"></div>
        </div>
      </div>
    </div>
  );
};
