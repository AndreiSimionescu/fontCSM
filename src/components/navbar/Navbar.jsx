import React from "react";
import "./Navbar.css";
import emblema from "../../images/emblema.svg";
import nume_echipa from "../../images/nume-echipa.png";
import {SidebarData} from "./SidebarData";
import {Link} from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-line"></div>
      <div className="navbar-content">
        <div className="navbar-head">
          <img src={emblema} alt="" />
          <label className="nav-label" htmlFor="">
            {" "}
            C. S. M Suceava
          </label>
        </div>
        <div className="navbar-body">
          <div className="navbar-body-top"></div>
          <div className="navbar-body-bootom">
            <ul>
              {SidebarData.map((val, key) => {
                return (
                  <Link to={val.link}>
                    <li key={key} className="row">
                      {" "}
                      <div className="titlu">{val.title}</div>
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
