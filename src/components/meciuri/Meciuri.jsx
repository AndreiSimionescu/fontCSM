import React from "react";
import {Navbar} from "../navbar/Navbar";
import "./Meciuri.css";
import login from "../../images/image-meciuri.png";
import emblema1 from "../../icons/emblema1-meciuri.svg";
import emblema2 from "../../icons/emblema-baia-mare.svg";
import emblema3 from "../../icons/emblema-ucluj.svg";
import emblema4 from "../../icons/emblema-craiova.svg";
import emblema_unirea from "../../icons/emblema-unirea.svg";
import emblema_steaua from "../../icons/emblema-steaua.svg";
import emblema_rapid from "../../icons/emblema-rapid.svg";
import titlu_jucat1 from "../../icons/titlu-jucat1.svg";
import titlu_jucat2 from "../../icons/titlu-jucat2.svg";
import titlu_jucat3 from "../../icons/titlu-jucat3.svg";
import titlu_urmator1 from "../../icons/titlu-urmator1.svg";
import titlu_urmator2 from "../../icons/titlu-urmator2.svg";
import titlu_urmator3 from "../../icons/titlu-urmator3.svg";

export const Meciuri = () => {
  return (
    <div className="meciuri">
      <Navbar />
      <div classname="div-titlu">
        <label htmlFor="" className="titlu-meciuri">
          MECIURI
        </label>
      </div>
      <div className="div-meciuri">
        <div className="div-meciuri-left">
          <label htmlFor="">JUCATE</label>
          <div className="jucat">
            <div className="banner1">
              <div className="div-part-top">
                <label htmlFor="" className="titlu-date">
                  08 OCTOMBRIE 2022
                </label>
              </div>
              <div className="div-part-bottom">
                <div className="div-part-bottom-banner">
                  <div className="div-nume-echipa">
                    <label htmlFor="" className="lbl-nume-echipa">
                      C.S.M. Suceava
                    </label>
                  </div>
                  <div className="div-scor">
                    <label htmlFor="" className="lbl-scor">
                      0-3
                    </label>
                  </div>
                  <div className="div-nume-echipa">
                    <label htmlFor="" className="lbl-nume-echipa">
                      Știința Baia Mare
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <img src={emblema1} alt="" className="emblema1" />
            <div className="div-titlu-meci-jucat1">
              <img src={titlu_jucat1} className="titlu-jucat1" alt="" />
            </div>
            <img src={emblema2} alt="" className="emblema2" />
          </div>
          <div className="jucat">
            <div className="banner1">
              <div className="div-part-top">
                <label htmlFor="" className="titlu-date">
                  15 OCTOMBRIE 2022
                </label>
              </div>
              <div className="div-part-bottom">
                <div className="div-part-bottom-banner">
                  <div className="div-nume-echipa">
                    <label htmlFor="" className="lbl-nume-echipa">
                      C.S.M. Suceava
                    </label>
                  </div>
                  <div className="div-scor">
                    <label htmlFor="" className="lbl-scor">
                      3-2
                    </label>
                  </div>
                  <div className="div-nume-echipa">
                    <label htmlFor="" className="lbl-nume-echipa">
                      “U” Cluj
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <img src={emblema1} alt="" className="emblema1" />
            <div className="div-titlu-meci-jucat1">
              <img src={titlu_jucat2} className="titlu-jucat1" alt="" />
            </div>
            <img src={emblema3} alt="" className="emblema2" />
          </div>
          <div className="jucat">
            <div className="banner1">
              <div className="div-part-top">
                <label htmlFor="" className="titlu-date">
                  22 OCTOMBRIE 2022
                </label>
              </div>
              <div className="div-part-bottom">
                <div className="div-part-bottom-banner">
                  <div className="div-nume-echipa">
                    <label htmlFor="" className="lbl-nume-echipa">
                      S. C. M Craiova
                    </label>
                  </div>
                  <div className="div-scor">
                    <label htmlFor="" className="lbl-scor">
                      3-0
                    </label>
                  </div>
                  <div className="div-nume-echipa">
                    <label htmlFor="" className="lbl-nume-echipa">
                      C. S. M Suceava
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <img src={emblema4} alt="" className="emblema1" />
            <div className="div-titlu-meci-jucat1">
              <img src={titlu_jucat3} className="titlu-jucat1" alt="" />
            </div>
            <img src={emblema1} alt="" className="emblema2" />
          </div>
        </div>
        <div className="div-meciuri-right">
          <label htmlFor="">URMATOARE</label>
          <div className="urmator">
            <div className="banner1">
              <div className="div-part-top">
                <label htmlFor="" className="titlu-date">
                  29 OCTOMBRIE 2022 ORA 14:00
                </label>
              </div>
              <div className="div-part-bottom">
                <div className="div-part-bottom-banner">
                  <div className="div-nume-echipa">
                    <label htmlFor="" className="lbl-nume-echipa">
                      C. S. M Suceava
                    </label>
                  </div>
                  <div className="div-scor">
                    <label htmlFor="" className="lbl-scor">
                      VS
                    </label>
                  </div>
                  <div className="div-nume-echipa">
                    <label htmlFor="" className="lbl-nume-echipa">
                      Unirea Dej
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <img src={emblema1} alt="" className="emblema1" />
            <div className="div-titlu-meci-jucat1">
              <img src={titlu_urmator1} className="titlu-jucat1" alt="" />
            </div>
            <img src={emblema_unirea} alt="" className="emblema2" />
          </div>
          <div className="urmator">
            <div className="banner1">
              <div className="div-part-top">
                <label htmlFor="" className="titlu-date">
                  05 NOIEMBRIE 2022 ORA 19:00
                </label>
              </div>
              <div className="div-part-bottom">
                <div className="div-part-bottom-banner">
                  <div className="div-nume-echipa">
                    <label htmlFor="" className="lbl-nume-echipa">
                      Steaua București
                    </label>
                  </div>
                  <div className="div-scor">
                    <label htmlFor="" className="lbl-scor">
                      VS
                    </label>
                  </div>
                  <div className="div-nume-echipa">
                    <label htmlFor="" className="lbl-nume-echipa">
                      C. S. M Suceava
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <img src={emblema_steaua} alt="" className="emblema1" />
            <div className="div-titlu-meci-jucat1">
              <img src={titlu_urmator2} className="titlu-jucat1" alt="" />
            </div>
            <img src={emblema1} alt="" className="emblema2" />
          </div>
          <div className="urmator">
            <div className="banner1">
              <div className="div-part-top">
                <label htmlFor="" className="titlu-date">
                  12 NOIEMBRIE 2022 ORA 20:00
                </label>
              </div>
              <div className="div-part-bottom">
                <div className="div-part-bottom-banner">
                  <div className="div-nume-echipa">
                    <label htmlFor="" className="lbl-nume-echipa">
                      Rapid București
                    </label>
                  </div>
                  <div className="div-scor">
                    <label htmlFor="" className="lbl-scor">
                      VS
                    </label>
                  </div>
                  <div className="div-nume-echipa">
                    <label htmlFor="" className="lbl-nume-echipa">
                      C. S. M Suceava
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <img src={emblema_rapid} alt="" className="emblema1" />
            <div className="div-titlu-meci-jucat1">
              <img src={titlu_urmator3} className="titlu-jucat1" alt="" />
            </div>
            <img src={emblema1} alt="" className="emblema2" />
          </div>
        </div>
      </div>
    </div>
  );
};
