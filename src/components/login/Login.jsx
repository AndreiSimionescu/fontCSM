import React from "react";
import {Navbar} from "../navbar/Navbar";
import emblema from "../../icons/emblema-echipa.svg";
import login from "../../images/login.png";
import sticker from "../../icons/echipa-sticker.svg";
import profile from "../../icons/profile.svg";
import lock from "../../icons/lock.svg";
import "./Login.css";

export const Login = () => {
  return (
    <div className="login">
      <Navbar />
      <div className="form-login">
        <div className="part-bottom">
          <img src={emblema} alt="" />
          <label htmlFor="">LOGIN</label>
          <img src={sticker} alt="" />
        </div>
        <div className="form">
          <div className="div-user">
            <input type="text" className="input-form1" placeholder="username" />
            <img src={profile} alt="" className="profile" />
          </div>
          <div className="div-password">
            <input type="password" className="input-form2" placeholder="password" />
            <img src={lock} alt="" className="lock" />
          </div>
        </div>
        <div className="div-login">
          <button className="btn-login">Login</button>
        </div>
      </div>
    </div>
  );
};
